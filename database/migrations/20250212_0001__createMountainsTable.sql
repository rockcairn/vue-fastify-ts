use javascriptdb;

create table mountains
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name Varchar(256) NOT NULL,
    height INT NOT NULL,
    mountain_range Varchar(256) NOT NULL 
);

INSERT into mountains (name, height, mountain_range) values ('Mount Elbert', 14440, 'Sawatch');
INSERT into mountains (name, height, mountain_range) values ('Mount Evans', 14270, 'Front Range');
INSERT into mountains (name, height, mountain_range) values ('Mount Wilson', 14250, 'San Juan');
INSERT into mountains (name, height, mountain_range) values ('Mount Lincoln', 14291, 'Ten Mile Range');