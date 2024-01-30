CREATE DATABASE todos_db;
USE todos_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, -- Setting the primary key
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(250) NOT NULL
);

CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    description VARCHAR(150) NOT NULL,
    status VARCHAR(30) NOT NULL,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);