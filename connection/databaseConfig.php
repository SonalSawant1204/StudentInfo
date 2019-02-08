<?php
$servername="localhost";
$username="root";
$password="root";
$database="studentDetails";


$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    
} 
// echo __DIR__.__FILE__;
?>