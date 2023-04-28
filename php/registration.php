<?php 
  include 'config.php';
  session_start();
  if(!isset($_POST['submit']))
  {
       ?>
       <script type="text/javascript">
       	window.location.href="home.html";
       </script>
       <?php
  }else{
  	
     $name = $_POST['name'];
     $email = $_POST['email'];
     $number = $_POST['number'];
     $gender = $_POST['gender'];
     $dob = $_POST['dob'];

     echo $dob;
     $password = $_POST['password'];


     $query = "INSERT INTO `user_registration`(`name`,`email`,`number`,`gender`,`dob`,`password`) VALUES('$name','$email','$number','$gender','$dob','$password')";

     $result = mysqli_query($con,$query);

     if($result)
     {
        $_SESSION["done"] = "true";
      //  echo "data insert"6;
      ?>
      <script>
        // alert("Data Successfully inserted");
        window.location.href="../home.php";
      </script>
      <?php
     }else{
      echo "data not insert";
     }

  	
  }
?>

