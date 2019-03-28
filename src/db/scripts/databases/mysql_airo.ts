import { sql } from '../..';

sql.query(
    `
    DROP DATABASE IF EXISTS Airo;
    CREATE DATABASE Airo;
    USE Airo;

    CREATE TABLE Company (
      id INT NOT NULL ,
      name VARCHAR(32) NOT NULL 
    );

    CREATE TABLE Pass_in_trip (
      id INT NOT NULL ,
      trip INT NOT NULL ,
      passenger INT NOT NULL ,
      place VARCHAR(32) NOT NULL 
    );

    CREATE TABLE Passenger (
      id INT NOT NULL ,
      name VARCHAR(32) NOT NULL 
    );

    CREATE TABLE Trip (
      id INT NOT NULL ,
      company INT NOT NULL ,
      plane VARCHAR(32) NOT NULL ,
      town_from VARCHAR(32) NOT NULL ,
      town_to VARCHAR(32) NOT NULL ,
      time_out DATETIME NOT NULL ,
      time_in DATETIME NOT NULL 
    );

    /*----Company----*/
    INSERT INTO Company VALUES(1,'Don_avia');
    INSERT INTO Company VALUES(2,'Aeroflot');
    INSERT INTO Company VALUES(3,'Dale_avia');
    INSERT INTO Company VALUES(4,'air_France');
    INSERT INTO Company VALUES(5,'British_AW');
                                                                                                                                                                                                                                                             
    /*----Passenger---- */
    INSERT INTO Passenger VALUES(1,'Bruce Willis');
    INSERT INTO Passenger VALUES(2,'George Clooney');
    INSERT INTO Passenger VALUES(3,'Kevin Costner');
    INSERT INTO Passenger VALUES(4,'Donald Sutherland');
    INSERT INTO Passenger VALUES(5,'Jennifer Lopez');
    INSERT INTO Passenger VALUES(6,'Ray Liotta');
    INSERT INTO Passenger VALUES(7,'Samuel L. Jackson');
    INSERT INTO Passenger VALUES(8,'Nikole Kidman');
    INSERT INTO Passenger VALUES(9,'Alan Rickman');
    INSERT INTO Passenger VALUES(10,'Kurt Russell');
    INSERT INTO Passenger VALUES(11,'Harrison Ford');
    INSERT INTO Passenger VALUES(12,'Russell Crowe');
    INSERT INTO Passenger VALUES(13,'Steve Martin');
    INSERT INTO Passenger VALUES(14,'Michael Caine');
    INSERT INTO Passenger VALUES(15,'Angelina Jolie');
    INSERT INTO Passenger VALUES(16,'Mel Gibson');
    INSERT INTO Passenger VALUES(17,'Michael Douglas');
    INSERT INTO Passenger VALUES(18,'John Travolta');
    INSERT INTO Passenger VALUES(19,'Sylvester Stallone');
    INSERT INTO Passenger VALUES(20,'Tommy Lee Jones');
    INSERT INTO Passenger VALUES(21,'Catherine Zeta-Jones');
    INSERT INTO Passenger VALUES(22,'Antonio Banderas');
    INSERT INTO Passenger VALUES(23,'Kim Basinger');
    INSERT INTO Passenger VALUES(24,'Sam Neill');
    INSERT INTO Passenger VALUES(25,'Gary Oldman');
    INSERT INTO Passenger VALUES(26,'ClINT Eastwood');
    INSERT INTO Passenger VALUES(27,'Brad Pitt');
    INSERT INTO Passenger VALUES(28,'Johnny Depp');
    INSERT INTO Passenger VALUES(29,'Pierce Brosnan');
    INSERT INTO Passenger VALUES(30,'Sean Connery');
    INSERT INTO Passenger VALUES(31,'Bruce Willis');
    INSERT INTO Passenger VALUES(37,'Mullah Omar');

                                                                                                                                                                                                                                                                    
    /*----Trip---- */
    INSERT INTO Trip VALUES(1100,4,'Boeing','Rostov','Paris','1900-01-01 14:30:00','1900-01-01 17:50:00');
    INSERT INTO Trip VALUES(1101,4,'Boeing','Paris ','Rostov','1900-01-01 08:12:00','1900-01-01 11:45:00');
    INSERT INTO Trip VALUES(1123,3,'TU-154','Rostov','Vladivostok','1900-01-01 16:20:00','1900-01-01 03:40:00');
    INSERT INTO Trip VALUES(1124,3,'TU-154','Vladivostok','Rostov','1900-01-01 09:00:00','1900-01-01 19:50:00');
    INSERT INTO Trip VALUES(1145,2,'IL-86 ','Moscow','Rostov','1900-01-01 09:35:00','1900-01-01 11:23:00');
    INSERT INTO Trip VALUES(1146,2,'IL-86 ','Rostov','Moscow','1900-01-01 17:55:00','1900-01-01 20:01:00');
    INSERT INTO Trip VALUES(1181,1,'TU-134','Rostov','Moscow','1900-01-01 06:12:00','1900-01-01 08:01:00');
    INSERT INTO Trip VALUES(1182,1,'TU-134','Moscow','Rostov','1900-01-01 12:35:00','1900-01-01 14:30:00');
    INSERT INTO Trip VALUES(1187,1,'TU-134','Rostov','Moscow','1900-01-01 15:42:00','1900-01-01 17:39:00');
    INSERT INTO Trip VALUES(1188,1,'TU-134','Moscow','Rostov','1900-01-01 22:50:00','1900-01-01 00:48:00');
    INSERT INTO Trip VALUES(1195,1,'TU-154','Rostov','Moscow','1900-01-01 23:30:00','1900-01-01 01:11:00');
    INSERT INTO Trip VALUES(1196,1,'TU-154','Moscow','Rostov','1900-01-01 04:00:00','1900-01-01 05:45:00');
    INSERT INTO Trip VALUES(7771,5,'Boeing','London','Singapore','1900-01-01 01:00:00','1900-01-01 11:00:00');
    INSERT INTO Trip VALUES(7772,5,'Boeing','Singapore','London','1900-01-01 12:00:00','1900-01-01 02:00:00');
    INSERT INTO Trip VALUES(7773,5,'Boeing','London','Singapore','1900-01-01 03:00:00','1900-01-01 13:00:00');
    INSERT INTO Trip VALUES(7774,5,'Boeing','Singapore','London','1900-01-01 14:00:00','1900-01-01 06:00:00');
    INSERT INTO Trip VALUES(7775,5,'Boeing','London','Singapore','1900-01-01 09:00:00','1900-01-01 20:00:00');
    INSERT INTO Trip VALUES(7776,5,'Boeing','Singapore','London','1900-01-01 18:00:00','1900-01-01 08:00:00');
    INSERT INTO Trip VALUES(7777,5,'Boeing','London','Singapore','1900-01-01 18:00:00','1900-01-01 06:00:00');
    INSERT INTO Trip VALUES(7778,5,'Boeing','Singapore','London','1900-01-01 22:00:00','1900-01-01 12:00:00');
    INSERT INTO Trip VALUES(8881,5,'Boeing','London','Paris','1900-01-01 03:00:00','1900-01-01 04:00:00');
    INSERT INTO Trip VALUES(8882,5,'Boeing','Paris','London','1900-01-01 22:00:00','1900-01-01 23:00:00');

    
    /*----Pass_in_trip---- */
    INSERT INTO Pass_in_trip VALUES(1, 1100, 1,'1a');
    INSERT INTO Pass_in_trip VALUES(2, 1123, 3,'2a');
    INSERT INTO Pass_in_trip VALUES(3, 1123, 1,'4c');
    INSERT INTO Pass_in_trip VALUES(4, 1123, 6,'4b');
    INSERT INTO Pass_in_trip VALUES(5, 1124, 2,'2d');
    INSERT INTO Pass_in_trip VALUES(6, 1145, 3,'2c');
    INSERT INTO Pass_in_trip VALUES(7, 1181, 1,'1a');
    INSERT INTO Pass_in_trip VALUES(8, 1181, 6,'1b');
    INSERT INTO Pass_in_trip VALUES(9, 1181, 8,'3c');
    INSERT INTO Pass_in_trip VALUES(10, 1181, 5,'1b');
    INSERT INTO Pass_in_trip VALUES(11, 1182, 5,'4b');
    INSERT INTO Pass_in_trip VALUES(12, 1187, 8,'3a');
    INSERT INTO Pass_in_trip VALUES(13, 1188, 8,'3a');
    INSERT INTO Pass_in_trip VALUES(14, 1182, 9,'6d');
    INSERT INTO Pass_in_trip VALUES(15, 1145, 5,'1d');
    INSERT INTO Pass_in_trip VALUES(16, 1187, 10,'3d');
    INSERT INTO Pass_in_trip VALUES(17, 8882, 37,'1a'); 
    INSERT INTO Pass_in_trip VALUES(18, 7771, 37,'1c'); 
    INSERT INTO Pass_in_trip VALUES(19, 7772, 37,'1a'); 
    INSERT INTO Pass_in_trip VALUES(20, 8881, 37,'1d'); 
    INSERT INTO Pass_in_trip VALUES(21, 7778, 10,'2a'); 
    INSERT INTO Pass_in_trip VALUES(22, 7772, 10,'3a');
    INSERT INTO Pass_in_trip VALUES(23, 7771, 11,'4a');
    INSERT INTO Pass_in_trip VALUES(24, 7771, 11,'1b');
    INSERT INTO Pass_in_trip VALUES(25, 7771, 11,'5a');
    INSERT INTO Pass_in_trip VALUES(26, 7772, 12,'1d');
    INSERT INTO Pass_in_trip VALUES(27, 7773, 13,'2d');
    INSERT INTO Pass_in_trip VALUES(28, 7772, 13,'1b');
    INSERT INTO Pass_in_trip VALUES(29, 8882, 14,'3d');
    INSERT INTO Pass_in_trip VALUES(30, 7771, 14,'4d');
    INSERT INTO Pass_in_trip VALUES(31, 7771, 14,'5d');
    INSERT INTO Pass_in_trip VALUES(32, 7772, 14,'1c');
`,
    err => {
        if (!err) {
            console.log('Database Airport successfully created');
        } else {
            console.log(err);
        }
    },
);
