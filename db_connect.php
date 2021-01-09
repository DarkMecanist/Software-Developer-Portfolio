<?php
  $db_host = "joaomout_WPO3T";
  $db_user = "joaomout_WPO3T";
  $db_pass = "Motorola94!";
  $db_name = "joaomout_visitorcounter";

  $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
 ?>
