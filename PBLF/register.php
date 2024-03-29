<?php
require_once 'config.php';

$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$usertype = $_POST['usertype'];

$sql = "INSERT INTO users (username, password, usertype) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $password, $usertype);

if ($stmt->execute()) {
	header("Location: index.html");
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>