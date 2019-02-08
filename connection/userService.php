<?php 

function delete($rollNo){
    
    include "databaseConfig.php";
    $sql= "UPDATE details set deleteflag=1 WHERE rollNo=$rollNo";
    if($conn->query($sql)){
        if($conn->affected_rows==1){
            echo 'your record is saved successfully';
        }else{
            echo 'nothing is update';
        }
    }else{
        echo 'error in querry';
    }
    
    
  
}

?>