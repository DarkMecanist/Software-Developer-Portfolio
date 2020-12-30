<?php

  function total_views($conn, $page_id=null) {
    if ($page_id === null) {
      // Count total website views
      $query = "SELECT sum(total_views) as total_views FROM pages";
      $result = mysqli_query($conn, $query);

      if (mysqli_num_rows($result) > 0) {
        while ($row = $result->fetch_assoc()) {
          if ($row['total_views'] === null) {
            return 0;
          } else {
            return $row['total_views'];
          }
        }
      } else {
        return "No records found!";
      }
    } else {
      // Count specific page views
      $query = "SELECT total_views FROM pages WHERE id='$page_id'";
      $result = mysqli_query($conn, $query);

      if (mysqli_num_rows($result) > 0) {
        while ($row = $result->fetch_assoc()) {
          if ($row['total_views'] === null) {
            return 0;
          } else {
            return $row['total_views'];
          }
        }
      } else {
        return "No records found!";
      }
    }
  }

  function return_latest_view_date($conn, $page_id=1) {
    $query = "SELECT max(date_visited) FROM page_views WHERE page_id='$page_id'";
    $result = mysqli_query($conn, $query);
    return $result->fetch_assoc()['max(date_visited)'];
  }

  function return_earliest_view_date($conn, $page_id=1) {
    $query = "SELECT min(date_visited) FROM page_views WHERE page_id='$page_id'";
    $result = mysqli_query($conn, $query);
    return $result->fetch_assoc()['min(date_visited)'];
  }

  function is_unique_view($conn, $visitor_ip, $page_id) {
    $query = "SELECT * FROM page_views WHERE visitor_ip='$visitor_ip' AND page_id='$page_id'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
      return false;
    } else {
      return true;
    }
  }

  function add_view($conn, $visitor_ip, $page_id) {
    if (is_unique_view($conn, $visitor_ip, $page_id) === true) {
      $current_date = date('Y/m/d');
      $location_info =  unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip=' . $visitor_ip));
      $location = $location = $location_info['geoplugin_city'] . ", " . $location_info['geoplugin_countryName'];

      $query = "INSERT INTO page_views (visitor_ip, page_id, date_visited, location) VALUES ('$visitor_ip', '$page_id', '$current_date', '$location')";

      if (mysqli_query($conn, $query)) {
        $query = "UPDATE pages SET total_views = total_views + 1 WHERE id='$page_id'";

        if (!mysqli_query($conn, $query)) {
          echo "Error updating record: " . mysqli_error($conn);
        }
      } else {
        echo "Error inserting record: " . mysqli_error($conn);
      }
    }
  }

  function return_num_days($latest_date, $earliest_date) {
    $e_date = new DateTime($earliest_date);
    $l_date = new DateTime($latest_date);
    return $l_date->diff($e_date)->format("%d");
  };

  function add_subtract_days_from_date($operation, $num_days, $date) {
    $date_obj = new DateTime($date);
    if ($operation === 'add') {
      return $date_obj->add(new DateInterval("P" . $num_days . "D"));
    } elseif ($operation ==='sub') {
      return $date_obj->sub(new DateInterval("P" . $num_days . "D"));
    } else {
      return NULL;
    }
  };

  function return_weekly_stats($conn, $page_id=1) {
    $num_days = 7;
    $latest_date_string = return_latest_view_date($conn, $page_id);
    $earliest_date_string = add_subtract_days_from_date('sub', ($num_days-1), $latest_date_string)->format('Y-m-d');
    $latest_date = new DateTime($latest_date_string);
    $earliest_date = new DateTime($earliest_date_string);
    $date_diff_days = $latest_date->diff($earliest_date)->format('%d');

    $query = "SELECT * FROM page_views WHERE page_id='$page_id' AND date_visited>'$earliest_date_string' AND date_visited<='$latest_date_string'";
    $result = mysqli_query($conn, $query);

    $location_array = return_location_counter_query($result);
    $total_views = return_num_views_query($result);

    $views_per_day = round(($total_views / $num_days), 1);

    $message = "WEEKLY STATS:\nFrom $earliest_date_string to $latest_date_string ($date_diff_days days) you have received $views_per_day views/day\n\nLocation | Num. Users | Percent Users\n";

    foreach ($location_array as $location => $counter) {
      $percentage = round(($counter / $total_views) * 100);
      $submessage = "$location | $counter | $percentage%\n";

      $message .= $submessage;
    }

    return $message;
  };

  function return_global_stats($conn, $page_id=1) {
    $latest_date_string = return_latest_view_date($conn, $page_id);
    $earliest_date_string = return_earliest_view_date($conn, $page_id);
    $latest_date = new DateTime($latest_date_string);
    $earliest_date = new DateTime($earliest_date_string);
    $date_diff_days = $latest_date->diff($earliest_date)->format('%d');

    $total_views = total_views($conn, $page_id);

    $views_per_day = round(($total_views / $date_diff_days), 2);

    $query = "SELECT * FROM page_views WHERE page_id='$page_id'";
    $result = mysqli_query($conn, $query);

    $location_array = return_location_counter_query($result);

    $message = "GLOBAL STATS:\nFrom $earliest_date_string to $latest_date_string ($date_diff_days days) you have received $views_per_day views/day\n\nLocation | Num. Users | Percent Users\n";

    foreach ($location_array as $location => $counter) {
      $percentage = round(($counter / $total_views) * 100);
      $submessage = "$location | $counter | $percentage%\n";

      $message .= $submessage;
    }

    return $message;
  };

  function return_location_counter_query($query_result) {
    $location_array = [];

    foreach ($query_result as $val) {
      if (array_key_exists($val['location'], $location_array)) {
        $location_array[$val['location']] += 1;
      } else {
        $location_array[$val['location']] = 1;
      }
    }

    return $location_array;
  };

  function return_num_views_query($query_result) {
    $counter = 0;
    foreach ($query_result as $val) {
      $counter += 1;
    }

    return $counter;
  };

 ?>
