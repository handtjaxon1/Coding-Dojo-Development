#
# TABLE STRUCTURE FOR: dojos
#

DROP TABLE IF EXISTS `dojos`;

CREATE TABLE `dojos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (1, 'Alvertatown', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (2, 'Lake Mellie', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (3, 'East Ruthside', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (4, 'Lake Maria', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (5, 'North Claud', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (6, 'Vandervortton', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (7, 'North Cristian', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (8, 'Kelleyville', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (9, 'Jameyborough', '2022-01-16 17:27:24', '2022-01-16 17:27:24');
INSERT INTO `dojos` (`id`, `name`, `created_at`, `updated_at`) VALUES (10, 'Bernardmouth', '2022-01-16 17:27:24', '2022-01-16 17:27:24');


#
# TABLE STRUCTURE FOR: ninjas
#

DROP TABLE IF EXISTS `ninjas`;

CREATE TABLE `ninjas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `dojos_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_ninjas_dojos_idx` (`dojos_id`),
  CONSTRAINT `fk_ninjas_dojos` FOREIGN KEY (`dojos_id`) REFERENCES `dojos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (1, 'Kelli', 'Spencer', 38, 1, '1992-12-22 06:44:30', '1982-09-30 03:23:56');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (2, 'Emelie', 'Corkery', 65, 2, '1970-09-12 07:02:39', '1978-05-09 05:06:15');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (3, 'Lea', 'Rempel', 25, 3, '1980-06-16 02:57:54', '1999-04-28 20:45:06');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (4, 'Shayne', 'Casper', 68, 4, '2008-08-10 17:22:09', '1994-12-22 16:57:04');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (5, 'Meaghan', 'O\'Reilly', 39, 5, '2000-01-12 02:55:24', '2019-03-15 05:19:51');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (6, 'Norbert', 'Leffler', 57, 6, '1985-05-29 06:00:53', '1972-06-12 17:30:24');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (7, 'Dovie', 'Renner', 46, 7, '2014-07-30 16:59:40', '1999-05-18 02:54:37');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (8, 'Darryl', 'Christiansen', 44, 8, '1981-03-28 17:14:46', '1977-09-01 04:16:26');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (9, 'Carmine', 'Powlowski', 78, 9, '1979-12-19 02:30:30', '1986-01-22 12:17:21');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (10, 'Jonatan', 'Littel', 34, 10, '2012-05-02 19:55:39', '2013-01-20 14:23:03');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (11, 'Maye', 'Hettinger', 56, 1, '1988-01-11 12:50:37', '1985-10-19 12:38:12');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (12, 'Jacinto', 'Gorczany', 47, 2, '2015-08-28 19:46:55', '1992-09-25 03:31:50');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (13, 'Hulda', 'Rogahn', 68, 3, '2020-11-04 16:11:10', '1999-04-09 17:02:32');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (14, 'Eudora', 'Kassulke', 45, 4, '2017-05-27 03:06:38', '1974-06-30 13:13:25');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (15, 'Alden', 'Friesen', 42, 5, '1994-07-11 06:46:44', '1981-10-27 20:26:07');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (16, 'Delaney', 'Lowe', 83, 6, '1979-03-20 19:13:02', '1999-10-05 16:43:02');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (17, 'Emanuel', 'Smitham', 52, 7, '2007-11-15 05:21:34', '1978-05-16 01:41:05');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (18, 'Keyon', 'Greenfelder', 69, 8, '2007-02-08 09:43:36', '2010-03-31 23:24:03');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (19, 'Domenica', 'Purdy', 32, 9, '1971-10-16 01:34:20', '1972-02-10 11:23:58');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (20, 'Julia', 'Blick', 63, 10, '2003-08-23 06:01:28', '1977-06-28 23:13:58');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (21, 'Simone', 'Dicki', 78, 1, '1972-10-12 06:21:13', '1991-05-30 13:50:38');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (22, 'Lynn', 'Kulas', 38, 2, '1976-02-25 14:29:40', '1999-11-17 12:34:31');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (23, 'Quinton', 'McDermott', 67, 3, '1978-12-26 11:01:24', '1997-02-13 17:55:29');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (24, 'Lucinda', 'Dickinson', 75, 4, '1973-01-18 05:05:01', '1977-04-27 03:18:38');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (25, 'Courtney', 'Towne', 60, 5, '1978-07-18 14:02:47', '1985-07-10 08:23:07');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (26, 'Jamal', 'Harvey', 73, 6, '1994-06-02 06:52:18', '1975-01-10 14:58:46');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (27, 'Maggie', 'Ruecker', 52, 7, '2011-11-16 23:29:24', '1974-03-15 12:35:13');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (28, 'Saul', 'Padberg', 82, 8, '1970-04-12 13:48:03', '1971-05-01 09:54:10');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (29, 'Hazle', 'Eichmann', 38, 9, '1995-07-13 20:19:55', '1987-12-01 10:27:23');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (30, 'Esmeralda', 'Cassin', 58, 10, '2002-04-02 03:55:23', '2018-08-22 07:10:37');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (31, 'Myrna', 'Bogan', 85, 1, '1983-12-11 17:05:48', '1981-03-20 03:21:07');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (32, 'Deshaun', 'Friesen', 18, 2, '2016-01-26 17:11:58', '1992-02-11 11:17:17');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (33, 'Chaz', 'Walter', 47, 3, '2005-03-26 06:34:59', '1998-06-25 19:50:41');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (34, 'Modesto', 'Nicolas', 70, 4, '1983-02-09 15:59:06', '1973-12-08 22:45:04');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (35, 'Douglas', 'Stamm', 65, 5, '2014-10-17 16:36:58', '1985-08-01 22:57:32');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (36, 'Jaeden', 'Ruecker', 60, 6, '2014-10-12 03:19:47', '1987-01-26 04:17:14');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (37, 'Elvera', 'Wunsch', 36, 7, '1997-09-13 03:28:55', '1976-07-01 09:59:28');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (38, 'Pierce', 'Weissnat', 27, 8, '2009-12-30 13:46:26', '1995-08-20 06:37:54');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (39, 'Maya', 'Collins', 50, 9, '1976-07-09 15:52:22', '1978-04-16 13:59:43');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (40, 'Stephanie', 'Littel', 32, 10, '1982-04-05 15:59:18', '1981-11-04 04:34:47');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (41, 'Corrine', 'Fisher', 46, 1, '2014-12-20 14:59:02', '2016-10-01 18:57:06');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (42, 'Maureen', 'Koch', 56, 2, '2012-04-08 11:53:37', '2014-12-06 05:21:30');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (43, 'Kaylin', 'Jenkins', 47, 3, '2020-07-19 02:18:57', '1971-07-19 03:40:36');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (44, 'Nyah', 'Strosin', 44, 4, '2013-05-18 16:36:04', '1983-01-08 01:34:22');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (45, 'Damon', 'Stanton', 54, 5, '2007-09-30 04:38:31', '1990-04-11 22:47:26');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (46, 'Coralie', 'Pouros', 55, 6, '2019-12-24 04:16:30', '1980-12-27 07:27:38');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (47, 'Kaycee', 'Moen', 38, 7, '1996-07-31 00:32:31', '1993-12-30 06:44:59');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (48, 'Alden', 'Kuhic', 51, 8, '2006-10-04 22:46:06', '2013-04-08 21:59:57');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (49, 'Russ', 'Lebsack', 32, 9, '1984-03-31 00:37:50', '2003-07-27 14:08:56');
INSERT INTO `ninjas` (`id`, `first_name`, `last_name`, `age`, `dojos_id`, `created_at`, `updated_at`) VALUES (50, 'Madeline', 'Prohaska', 36, 10, '1970-12-23 20:19:15', '2011-09-18 14:09:50');


