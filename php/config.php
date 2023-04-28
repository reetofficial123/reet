<?php 
  
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reet";

 $con= mysqli_connect($servername,$username,$password,$dbname);
  if(!$con)
  {
    echo "connection failed";
  }
?>

