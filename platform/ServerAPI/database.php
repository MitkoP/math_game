<?php

class Database{
    
    protected static $conn;
    
    public function connect(){
    
        if(!isset(self::$conn)){
        
            $config = parse_ini_file("../config.ini");
            
            self::$conn = new mysqli("localhost:3306", 'root', '', 'mathgamedb');
            
        }
        
        if(self::$conn->connect_errno){
        
            printf("Connect faild: %s\n", self::$conn->error);
            
            return false;
        }
        
        return self::$conn;
    }
    
    public function query($query){
        $connection = $this->connect();
        $data = array();
        
        $result = $connection->query($query);
        
        if( $result === false ){
            return false;
        }
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($data, $row);
            }           
        }
        else{
            array_push($data, array("data" =>"none"));
        }
        
        return json_encode( $data );
    }
    
    public function selectPlayer($username, $password){
        $connection = $this->connect();
        $data = array();
        $query = "SELECT * FROM players WHERE username = '$username' AND password = '$password'";
        $result = $connection->query($query);
        
        if( $result === false ){
            return false;
        }
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($data, $row);
            }           
        }
        else{
            array_push($data, array("data" =>"none"));
        }
        
        return json_encode( $data );
    }
    
    public function createPlayer($username, $password, $firstname, $lastname, $class, $date){
        $connection = $this->connect();
        
        $data = array();
        
        $query = "SELECT * FROM players WHERE username = '$username'";
        $result = $connection->query($query);
        
        if( $result === false ){
            return false;
        }
        
        if ($result->num_rows > 0) {
            $data["data"] ="exist";
            return  $data ;     
        }
        else{
            $insertQuery="INSERT INTO players (Username, Password, FirstName, LastName, Class, RegistrationDate) VALUES('$username','$password','$firstname','$lastname','$class','$date')";
            $result = $connection->query($insertQuery);
            
            if( $result === false ){
                return false;
            }
            
            $data["data"]='created';
        }
       
        
        return $data ;
    }
    
    
    public function error(){
        $connection = $this->connect();
        
        return $connection->error;
    }
    
    
    public function closeConnection(){
        self::$conn->close();
    }

}
?>