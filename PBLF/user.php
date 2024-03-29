<!DOCTYPE html>
<html>
<head>
	<title>User Dashboard</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<div class="container">
		<h1>Welcome, <?php echo $_SESSION['username'] ?>!</h1>
		<h3>Upcoming Events:</h3>
		<ul id="events"></ul>
		<script>
			fetch('get_events.php')
				.then(response => response.json())
				.then(data => {
					let output = '';

					data.forEach(event => {
						output += `<li><a href="event.html?id=${event.id}">${event.name}</a></li>`;
					});

					document.getElementById('events').innerHTML = output;
				});
		</script>
	</div>
</body>
</html>