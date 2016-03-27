<?php 

include 'database.php';

main();

function findAction(){
    $action = 'none';
    
    if(isset($_GET['action'])){
        return $_GET['action']; 
    }
    else{
        return false;
    }  
}

function main(){
   $action = findAction();
   
   
   if($action){
       switch ($action) {
            case "makequery":
                echo newQuery();
                break;
            case "login":
                echo login();
                break;
            case "create":
                echo create();
                break;
            default:
                echo json_encode( array("data" =>"not action found") );
        }
   }
   else{
       echo json_encode( array("data" =>"not action set") );
   }
}

function newQuery(){
    
    $Query = "SELECT `Class` FROM `players`";
    
    if(isset($_GET['query'])){$Query=$_GET['query'];}
    
    $db = new Database();
    $result = $db -> query($Query);
    if($result){
        return $result;
     }
     
     $db -> closeConnection();
     return json_encode( array("data" =>"error") );
}

function login(){
    $Username = '';
    $Password = '';
    if(isset($_GET['username'])){$Username=$_GET['username'];} 
    if(isset($_GET['password'])){$Password=$_GET['password'];}
   
   
   $db = new Database();
    $result = $db -> selectPlayer($Username, $Password);
    if($result){
        return $result;
     }
     
     $db -> closeConnection();
     return json_encode( array("data" =>"error") );
}

function create(){
    $Username = '';
    $Password = '';
    $Firstname = '';
    $Lastname = '';
    $Class = '';
    $RegistrationDate = '';
    
    if(isset($_POST['username'])){$Username=$_POST['username'];} 
    if(isset($_POST['password'])){$Password=$_POST['password'];}
    if(isset($_POST['firstname'])){$Firstname=$_POST['firstname'];}
    if(isset($_POST['lastname'])){$Lastname=$_POST['lastname'];}
    if(isset($_POST['class'])){$Class=$_POST['class'];}
    if(isset($_POST['date'])){$RegistrationDate=$_POST['date'];}
    
    $db = new Database();
    $result = $db -> createPlayer($Username, $Password, $Firstname, $Lastname, $Class, $RegistrationDate);
    if($result){
        return $result['data'];
     }
     
     $db -> closeConnection();
     return "error";
}

?>