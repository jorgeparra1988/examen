DROP DATABASE IF EXISTS coches;
CREATE DATABASE coches;

USE coches;

CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
    
);

CREATE TABLE coche(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(255) NOT NULL,
    potencia VARCHAR(20) NOT NULL,
    url VARCHAR(255) NOT NULL,
    user_id INT UNSIGNED,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);