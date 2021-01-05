<?php

  require_once('db_connect.php');
  require_once('functions.php');

  $global_message = return_global_stats($conn);
  $weekly_message = return_weekly_stats($conn);

  $message = $global_message . "\n" . $weekly_message;

  $mailto = "jmoutinho94@gmail.com";
  $subject = "Weekly View Report Portfolio";
  $headers = "From: maqslaser@gmail.com";

  ini_set("SMTP","ssl://smtp.gmail.com");
  ini_set("smtp_port","465");
  mail($mailto, $subject, $message, $headers);

  echo "MAIL SENT SUCESSFULLY";

 ?>
