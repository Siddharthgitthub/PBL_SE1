<?php
require_once 'config.php';

$name = $_POST['name'];
$start = $_POST['start'];
$end = $_POST['end'];
$description = $_POST['description'];

$sql = "INSERT INTO events (name, start, end, description, organization_id) VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssi", $name, $start, $end, $description, $_SESSION['id']);

if ($stmt->execute()) {
	header("Location: organization.php");
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>