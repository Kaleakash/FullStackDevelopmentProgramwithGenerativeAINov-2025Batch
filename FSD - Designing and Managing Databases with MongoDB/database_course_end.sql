-- Below command is use to to create the database. 
create database clientdatabase;
use clientdatabase;

-- Client table 
create table Client(
clientId int primary key,
cname varchar(30) not null,
email varchar(30) unique not null,
password varchar(30)
);

desc Client;

-- Insert record 

INSERT INTO Client (clientId, cname, email, password) VALUES
(1, 'John Smith', 'john.smith@gmail.com', 'pass123'),
(2, 'Emma Johnson', 'emma.johnson@gmail.com', 'emma@123'),
(3, 'Michael Brown', 'michael.brown@gmail.com', 'mike@456'),
(4, 'Sophia Davis', 'sophia.davis@gmail.com', 'sophia789'),
(5, 'William Wilson', 'william.wilson@gmail.com', 'will@321'),
(6, 'Olivia Taylor', 'olivia.taylor@gmail.com', 'olivia@111'),
(7, 'James Anderson', 'james.anderson@gmail.com', 'james@222'),
(8, 'Isabella Thomas', 'isabella.thomas@gmail.com', 'bella@333'),
(9, 'Daniel Moore', 'daniel.moore@gmail.com', 'daniel@444'),
(10, 'Mia Martin', 'mia.martin@gmail.com', 'mia@555');

-- View records 

select * from Client;

-- Fetch all clients
SELECT * FROM Client;

-- Find specific client
SELECT * FROM Client WHERE clientId = 5;

-- Update password
UPDATE Client SET password = 'newpass123' WHERE clientId = 3;

-- Delete a client
DELETE FROM Client WHERE clientId = 10;


-- Meeting table 

create table meeting(
meetingId int primary key,
meetingTopic varchar(100) not null,
numberOfPeople int check(numberOfPeople >=2),
meetingDate date check(meetingDate > sysdate()),
clientId int,
foreign key(clientId) references client(clientId)
);

-- insert the records 

INSERT INTO meeting (meetingId, meetingTopic, numberOfPeople, meetingDate, clientId) VALUES
(101, 'Project Kickoff', 5, '2026-06-10', 1),
(102, 'Requirement Discussion', 4, '2026-06-12', 1),

(103, 'Design Review', 3, '2026-06-15', 2),
(104, 'Sprint Planning', 6, '2026-06-18', 2),

(105, 'Client Feedback Session', 2, '2026-06-20', 3),

(106, 'Budget Discussion', 4, '2026-06-22', 4),

(107, 'Contract Finalization', 3, '2026-06-25', 4),

(108, 'Technical Demo', 5, '2026-06-28', 5),

(109, 'Progress Update', 3, '2026-07-01', 6),
(110, 'Final Delivery Meeting', 6, '2026-07-05', 6);


select * from meeting;


INSERT INTO meeting (meetingId, meetingTopic, numberOfPeople, meetingDate, clientId) VALUES
(111,"AI Project Discussion",4,'2026-05-4',10);

select * from meeting;










