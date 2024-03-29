<?php
session_start();

require_once 'config.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        $_SESSION['username'] = $user['username'];
        $_SESSION['usertype'] = $user['usertype'];

        if ($user['usertype'] == 'organization') {
            header("Location: organization.php");
        } else {
            header("Location: user.php");
        }

    } else {
        echo "Incorrect password";
    }
} else {
    echo "User not found";
}

$conn->close();
?>