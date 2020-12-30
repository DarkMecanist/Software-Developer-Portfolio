<?php
  $db_host = "localhost";
  $db_user = "joaoM";
  $db_pass = "1234@JM";
  $db_name = "visitorcounter";

  $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
 ?>
