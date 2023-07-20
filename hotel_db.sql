CREATE TABLE customer(
customer_id INT PRIMARY KEY AUTO_INCREMENT,
signup_id INT,
first_name VARCHAR(30),
last_name VARCHAR(30),
phone_number VARCHAR(20),
reward_points INT
);

CREATE TABLE admin(
admin_id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
email VARCHAR(30)
);

CREATE TABLE reservations(
reservations_id INT PRIMARY KEY AUTO_INCREMENT,
hotel_id INT,
customer_id INT,
signup_id INT,
checkin DATE,
checkout DATE,
total_price DOUBLE,
max_guests INT,
FOREIGN KEY (hotel_id) REFERENCES new_hotels(hotel_id),
FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);

CREATE TABLE new_hotels (
hotel_id int PRIMARY KEY AUTO_INCREMENT,        
hotel_name varchar(50),
hotel_address varchar(30),
hotel_city varchar(20),
room_number INT,
room_type VARCHAR(10),
max_guests INT,
total_price DOUBLE,
earnable_points INT,
breakfast BOOLEAN,
gym BOOLEAN
);


#Admin fake data

INSERT INTO admin VALUES(1, "Matthew", "Jones", "mjones@gmail.com");
INSERT INTO admin VALUES(2, "Jessy", "Williams", "jwilliams@gmail.com");
INSERT INTO admin VALUES(3, "Victor", "Henry", "vhenry@gmail.com");
INSERT INTO admin VALUES(4, "Steve", "Ferroni", "sferroni@gmail.com");

#Hotel fake data

INSERT INTO new_hotels VALUES (1, 'SkyCity - San Jose' , '2941 Thunder Rd.' , 'San Jose' , 1, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (2, 'SkyCity - San Jose' , '2941 Thunder Rd.' , 'San Jose' , 2, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (3, 'SkyCity - San Jose' , '2941 Thunder Rd.' , 'San Jose' , 3, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (4, 'SkyCity - San Jose' , '2941 Thunder Rd.' , 'San Jose' , 4, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (5, 'SkyCity - San Jose' , '2941 Thunder Rd.' , 'San Jose' , 5, 'Suite' , 8 , 1000.0 , 1150 , false , false);
INSERT INTO new_hotels VALUES (6, 'SkyCity - San Jose' , '2941 Thunder Rd.' , 'San Jose' , 6, 'Suite' , 8 , 1000.0 , 1150 , false , false);

INSERT INTO new_hotels VALUES (7, 'SkyCity - San Francisco' , '4427 Locust View Dr.' , 'San Francisco' , 1, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (8, 'SkyCity - San Francisco' , '4427 Locust View Dr.' , 'San Francisco' , 2, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (9, 'SkyCity - San Francisco' , '4427 Locust View Dr.' , 'San Francisco' , 3, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (10, 'SkyCity - San Francisco' , '4427 Locust View Dr.' , 'San Francisco' , 4, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (11, 'SkyCity - San Francisco' , '4427 Locust View Dr.' , 'San Francisco' , 5, 'Suite' , 8 , 1000.0 , 1150 , false , false);
INSERT INTO new_hotels VALUES (12, 'SkyCity - San Francisco' , '4427 Locust View Dr.' , 'San Francisco' , 6, 'Suite' , 8 , 1000.0 , 1150 , false , false);

INSERT INTO new_hotels VALUES (13, 'SkyCity - San Diego' , '3992 Parkway St.' , 'San Diego' , 1, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (14, 'SkyCity - San Diego' , '3992 Parkway St.' , 'San Diego' , 2, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (15, 'SkyCity - San Diego' , '3992 Parkway St.' , 'San Diego' , 3, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (16, 'SkyCity - San Diego' , '3992 Parkway St.' , 'San Diego' , 4, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (17, 'SkyCity - San Diego' , '3992 Parkway St.' , 'San Diego' , 5, 'Suite' , 8 , 1000.0 , 1150 , false , false);
INSERT INTO new_hotels VALUES (18, 'SkyCity - San Diego' , '3992 Parkway St.' , 'San Diego' , 6, 'Suite' , 8 , 1000.0 , 1150 , false , false);

INSERT INTO new_hotels VALUES (19, 'SkyCity - Manhattan' , '2327 Shinn St.' , 'Manhattan' , 1, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (20, 'SkyCity - Manhattan' , '2327 Shinn St.' , 'Manhattan' , 2, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (21, 'SkyCity - Manhattan' , '2327 Shinn St.' , 'Manhattan' , 3, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (22, 'SkyCity - Manhattan' , '2327 Shinn St.' , 'Manhattan' , 4, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (23, 'SkyCity - Manhattan' , '2327 Shinn St.' , 'Manhattan' , 5, 'Suite' , 8 , 1000.0 , 1150 , false , false);
INSERT INTO new_hotels VALUES (24, 'SkyCity - Manhattan' , '2327 Shinn St.' , 'Manhattan' , 6, 'Suite' , 8 , 1000.0 , 1150 , false , false);

INSERT INTO new_hotels VALUES (25, 'SkyCity - Rome (Italy)' , 'Via Moiariello 14' , 'Verzuolo' , 1, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (26, 'SkyCity - Rome (Italy)' , 'Via Moiariello 14' , 'Verzuolo' , 2, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (27, 'SkyCity - Rome (Italy)' , 'Via Moiariello 14' , 'Verzuolo' , 3, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (28, 'SkyCity - Rome (Italy)' , 'Via Moiariello 14' , 'Verzuolo' , 4, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (29, 'SkyCity - Rome (Italy)' , 'Via Moiariello 14' , 'Verzuolo' , 5, 'Suite' , 8 , 1000.0 , 1150 , false , false);
INSERT INTO new_hotels VALUES (30, 'SkyCity - Rome (Italy)' , 'Via Moiariello 14' , 'Verzuolo' , 6, 'Suite' , 8 , 1000.0 , 1150 , false , false);

INSERT INTO new_hotels VALUES (31, 'SkyCity - Berlin (Germany)' , 'Kieler Strasse 39' , 'Altenmarkt' , 1, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (32, 'SkyCity - Berlin (Germany)' , 'Kieler Strasse 39' , 'Altenmarkt' , 2, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (33, 'SkyCity - Berlin (Germany)' , 'Kieler Strasse 39' , 'Altenmarkt' , 3, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (34, 'SkyCity - Berlin (Germany)' , 'Kieler Strasse 39' , 'Altenmarkt' , 4, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (35, 'SkyCity - Berlin (Germany)' , 'Kieler Strasse 39' , 'Altenmarkt' , 5, 'Suite' , 8 , 1000.0 , 1150 , false , false);
INSERT INTO new_hotels VALUES (36, 'SkyCity - Berlin (Germany)' , 'Kieler Strasse 39' , 'Altenmarkt' , 6, 'Suite' , 8 , 1000.0 , 1150 , false , false);

INSERT INTO new_hotels VALUES (37, 'SkyCity - Invercargill (New Zealand)' , '31 Dart Street' , 'Waverley' , 1, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (38, 'SkyCity - Invercargill (New Zealand)' , '31 Dart Street' , 'Waverley' , 2, 'Single' , 2 , 100.0 , 50 , false , false);
INSERT INTO new_hotels VALUES (39, 'SkyCity - Invercargill (New Zealand)' , '31 Dart Street' , 'Waverley' , 3, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (40, 'SkyCity - Invercargill (New Zealand)' , '31 Dart Street' , 'Waverley' , 4, 'Double' , 4 , 300.0 , 150 , false , false);
INSERT INTO new_hotels VALUES (41, 'SkyCity - Invercargill (New Zealand)' , '31 Dart Street' , 'Waverley' , 5, 'Suite' , 8 , 1000.0 , 1150 , false , false);
INSERT INTO new_hotels VALUES (42, 'SkyCity - Invercargill (New Zealand)' , '31 Dart Street' , 'Waverley' , 6, 'Suite' , 8 , 1000.0 , 1150 , false , false);
