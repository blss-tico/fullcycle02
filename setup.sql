-- database fullcycle definition

-- create database
DROP DATABASE IF EXISTS fullcycle;

CREATE DATABASE fullcycle;

-- create user
-- CREATE USER 'root'@'%' IDENTIFIED BY 'fullcycledb';
-- GRANT ALL ON `fullcycle`.* TO 'root'@'%' WITH GRANT OPTIONS;
-- FLUSH PRIVILEGES;

-- use database
USE fullcycle;

-- create table
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
