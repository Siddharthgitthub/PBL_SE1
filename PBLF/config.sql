CREATE DATABASE community_events;

USE community_events;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(255) NOT NULL,
	usertype ENUM('user', 'organization') NOT NULL,
	UNIQUE (username)
);

CREATE TABLE events (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	start DATETIME NOT NULL,
	end DATETIME NOT NULL,
	description TEXT NOT NULL,
	organization_id INT NOT NULL,
	FOREIGN KEY (organization_id) REFERENCES users(id)
);

INSERT INTO users (username, password, usertype)
VALUES
	('user1', '$2y$10$jUzj1aG6vJ1W5TlIzgKmTe3.m047LZba5YrQBQXqBh1.qoMA8EfAq', 'user'),
	('org1', '$2y$10$jUzj1aG6vJ1W5TlIzgKmTe3.m047LZba5YrQBQXqBh1.qoMA8EfAq', 'organization');