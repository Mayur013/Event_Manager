make sure that xampp is installed in D: and htdocs folder is in D:/xampp/htdocs

paste 'server' folder into htdocs folder of xampp 

install composer(you can download it from browser and while installing, give path to the xampp folder for php.init file) 

open cmd in server folder

run 'composer update' command

now create database name testDB in MySQL
create table:
 CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(100) NOT NULL DEFAULT '',
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(50) NOT NULL DEFAULT '',
  `gender` varchar(50) NOT NULL DEFAULT '',
  `full_name` varchar(100) NOT NULL DEFAULT '',
  `picture` varchar(255) NOT NULL DEFAULT '',
  `verifiedEmail` int(11) NOT NULL DEFAULT 0,
  `token` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    banner_image LONGBLOB NOT NULL
);


now change password and username of MySQL in config.php file

start xampp server with Apache and mysql

now open react app
 
go to the public folder

rum command: npm install

run command: npm start



