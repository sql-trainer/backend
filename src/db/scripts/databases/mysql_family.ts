import { sql } from '../..';

sql.query(
    `
    DROP DATABASE IF EXISTS Family;
    CREATE DATABASE Family;
    USE Family;

    CREATE TABLE Family (
      id_s INT NOT NULL PRIMARY KEY,
      fstatus VARCHAR(50) NOT NULL, 
      persname VARCHAR(50) NOT NULL,
      yborn DATETIME NOT NULL
    );

    CREATE TABLE Goods (
      id_g INT NOT NULL PRIMARY KEY,
      gname VARCHAR(50) NOT NULL,
      gtype INT NOT NULL
    );

    CREATE TABLE GoodTypes (
      id_gt INT NOT NULL PRIMARY KEY,
      gtname VARCHAR(50) NOT NULL 
    );

    CREATE TABLE Payments (
      id_p INT NOT NULL PRIMARY KEY,
      pdate DATETIME NOT NULL,
      who INT NOT NULL,
      good INT NOT NULL,
      howmany INT NOT NULL,
      price INT NOT NULL
    );

    INSERT INTO Family VALUES(1,'отец','Иван Иванович','1960-5-13 00:00:00');
    INSERT INTO Family VALUES(2,'мать','Татьяна Петровна','1963-2-16 00:00:00');
    INSERT INTO Family VALUES(3, 'сын', 'Анатолий', '1983-6-5 00:00:00');
    INSERT INTO Family VALUES(4, 'дочь 1', 'Ольга', '1985-6-7 00:00:00');
    INSERT INTO Family VALUES(5, 'дочь 2', 'Ирина', '1988-4-10 00:00:00');
                                                                                                                                                                                                                                                             
    /*----Goods---- */
    INSERT INTO Goods VALUES(1, 'за квартиру', 1);
    INSERT INTO Goods VALUES(2, 'за телефон', 1);
    INSERT INTO Goods VALUES(3, 'хлеб', 2);
    INSERT INTO Goods VALUES(4, 'молоко', 2);
    INSERT INTO Goods VALUES(5, 'икра красная', 3);
    INSERT INTO Goods VALUES(6, 'кинотеатр', 4);
    INSERT INTO Goods VALUES(7, 'икра черная', 3);
    INSERT INTO Goods VALUES(8, 'таблетки от кашля', 5);
    INSERT INTO Goods VALUES(9, 'картошка', 2);
    INSERT INTO Goods VALUES(10, 'ананасы', 3);
    INSERT INTO Goods VALUES(11, 'телевизор', 8);
    INSERT INTO Goods VALUES(12, 'пылесос', 8);
    INSERT INTO Goods VALUES(13, 'куртка осенняя', 7);
    INSERT INTO Goods VALUES(14, 'шуба норковая', 7);
    INSERT INTO Goods VALUES(15, 'оплата музыкальной школы', 6);
    INSERT INTO Goods VALUES(16, 'оплата курсов английского языка', 6);
                                                                                                                                                                                                                                                                    
    /*----GoodTypes---- */
    INSERT INTO GoodTypes VALUES(1, 'Коммуналка');
    INSERT INTO GoodTypes VALUES(2, 'Продукты');
    INSERT INTO GoodTypes VALUES(3, 'Деликатесы');
    INSERT INTO GoodTypes VALUES(4, 'Развлечения');
    INSERT INTO GoodTypes VALUES(5, 'Лечение');
    INSERT INTO GoodTypes VALUES(6, 'Образование');
    INSERT INTO GoodTypes VALUES(7, 'Одежда');
    INSERT INTO GoodTypes VALUES(8, 'Техника');

    
    /*----Payments---- */
    INSERT INTO Payments VALUES(1, '2005-2-12 00:00:00', 1, 1, 1, 2000);
    INSERT INTO Payments VALUES(2, '2005-3-23 00:00:00', 2, 1, 1, 2100);
    INSERT INTO Payments VALUES(3, '2005-5-14 00:00:00', 3, 4, 5, 20);
    INSERT INTO Payments VALUES(4, '2005-7-22 00:00:00', 4, 5, 1, 350);
    INSERT INTO Payments VALUES(5, '2005-7-26 00:00:00', 4, 7, 2, 150);
    INSERT INTO Payments VALUES(6, '2005-2-20 00:00:00', 5, 6, 1, 100);
    INSERT INTO Payments VALUES(7, '2005-7-30 00:00:00', 2, 6, 1, 120);
    INSERT INTO Payments VALUES(8, '2005-9-12 00:00:00', 2, 16, 1, 5500);
    INSERT INTO Payments VALUES(9, '2005-9-30 00:00:00', 5, 15, 1, 230);
    INSERT INTO Payments VALUES(10, '2005-10-27 00:00:00', 5, 15, 1, 230);
    INSERT INTO Payments VALUES(11, '2005-11-28 00:00:00', 5, 15, 1, 250);
    INSERT INTO Payments VALUES(12, '2005-12-22 00:00:00', 5, 15, 1, 250);
    INSERT INTO Payments VALUES(13, '2005-8-11 00:00:00', 3, 13, 1, 2200);
    INSERT INTO Payments VALUES(14, '2005-10-23 00:00:00', 2, 14, 1, 66000);
    INSERT INTO Payments VALUES(15, '2005-2-3 00:00:00', 1, 9, 5, 8);
    INSERT INTO Payments VALUES(16, '2005-3-11 00:00:00', 1, 9, 5, 7);
    INSERT INTO Payments VALUES(17, '2005-3-18 00:00:00', 2, 9, 3, 8);
    INSERT INTO Payments VALUES(18, '2005-4-20 00:00:00', 1, 9, 8, 8);
    INSERT INTO Payments VALUES(19, '2005-5-13 00:00:00', 1, 9, 5, 7);
    INSERT INTO Payments VALUES(20, '2005-6-11 00:00:00', 2, 9, 3, 150);
    INSERT INTO Payments VALUES(21, '2006-1-12 00:00:00', 3, 10, 1, 100);
    INSERT INTO Payments VALUES(22, '2006-3-12 00:00:00', 1, 5, 3, 10);
    INSERT INTO Payments VALUES(23, '2005-6-5 00:00:00', 1, 8, 1, 300);
    INSERT INTO Payments VALUES(24, '2005-6-20 00:00:00', 3, 6, 8, 150);
`,
    err => {
        if (!err) {
            console.log('Database Family successfully created');
        } else {
            console.log(err);
        }
    },
);
