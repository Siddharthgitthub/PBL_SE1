<!DOCTYPE html>
<html>
<head>
	<title>Organization Dashboard</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<div class="container">
		<h1>Welcome, <?php echo $_SESSION['username'] ?>!</h1>
		<form action="add_event.php" method="post">
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" required>
			<label for="start">Start Time:</label>
			<input type="datetime-local" name="start" id="start" required>
			<label for="end">End Time:</label>
			<input type="datetime-local" name="end" id="end" required>
			<label for="description">Description:</label>
			<textarea name="description" id="description" required></textarea>
			<input type="submit" value="Add Event">
		</form>
	</div>
</body>
</html>