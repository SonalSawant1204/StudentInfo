<?php

include "../connection/databaseConfig.php";
include "./helper.php"; 
include "./displayData.php";
echo "<pre>";
print_r($_POST);

$nameErr = $rollNoErr = $marksErr = "";
$name = $rollNo = $marks = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $flag = false;
    // add record
    if(!empty($_POST["save"]))
    if($_POST["save"] == 'Submit' ){
      
      
      if (empty($_POST["userRollNo"])) {
        
        $flag=true;
        $rollNoErr = "Roll No is required";
      } else {
        $flag=true;        
        $rollNo = test_input($_POST["userRollNo"]);
        }
      
      if (empty($_POST["userName"])) {
        $flag=true;
          $nameErr = "Name is required";
             }
              else {
                $name = test_input($_POST["userName"]);
                $flag=true;
                if (!preg_match("/^[a-zA-Z ]+$/",$name)) {
                $nameErr = "Only letters and white space allowed"; 
             }
         }

      

            if (empty($_POST["userMarks"])) {
                $flag=true;
                $marksErr = "Marks are required";
              } else {
                $flag=true;
                $marks = test_input($_POST["userMarks"]);
                    }


      $sql =  "INSERT INTO details(rollNo,userName,userMarks)VALUES($rollNo,'$name',$marks)";
        $err="";
            if($flag === true){
                if ($conn->query($sql) === TRUE) {
                    $err= "New record created successfully";
                } else {
                    $err= "Error: " . $sql."<br>";
                     
                //  . "<br>" . $conn->error;
                      }
    }
   
  }
}

?>

