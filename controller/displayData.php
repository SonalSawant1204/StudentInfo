<?php 

include "../connection/databaseConfig.php";
 $sql="SELECT rollNo,userName,userMarks from details WHERE deleteflag=0;";
$res=$conn->query($sql);
// print_r($res);
$error=array();
$success=array();
$data=array();
if($res->num_rows>0)
{

    while($row=$res->fetch_assoc()){
        array_push($data,$row);

    }
    array_push($success,"Data is retrived");
    // print_r($data);
}
else
{
    array_push($error,"Error while fetching the data");
}
$userResponse=['error'=>$error,'success'=>$success,'data','data'=>$data];
$userResponse=json_encode($userResponse);
echo $userResponse;


// echo "Hello good morning";
// echo __DIR__.__FILE__;
?>