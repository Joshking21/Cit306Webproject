<?php 
 


 $servername = "localhost";
 $username = "root"; // Your database username
 $password = ""; // Your database password
 $dbname = "event_website"; // Your database name
 
 // Create connection
 $conn = new mysqli($servername, $username, $password, $dbname);
 if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $firstName = htmlspecialchars($_POST["firstName"]);
    $lastName =  htmlspecialchars($_POST["firstName"]);
    $email =  htmlspecialchars($_POST["email"]);
    $phone =  htmlspecialchars($_POST["phone"]);

    $sql = "INSERT INTO attendees (firstName, lastName, email, phone) 
            VALUES (?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $phone);

    if ($stmt->execute()) {
        echo "Data successfully stored!";
    } else {
        echo "Error: " . $stmt->error;
    }



    $stmt->close();
    $conn->close();
    
 }
 else{
    header("Location: ../index.php");
 }