-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.13-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para prueba
DROP DATABASE IF EXISTS `prueba`;
CREATE DATABASE IF NOT EXISTS `prueba` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `prueba`;

-- Volcando estructura para tabla prueba.question
DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `question` varchar(500) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla prueba.question: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` (`question_id`, `role`, `question`, `type`) VALUES
	(1, '2e40ad879e955201df4dedbf8d479a12', 'La información es correcta', 2),
	(2, '0cd738b38aca79791de30e02a0d992b8', 'Del 1 al 5, es rapido el sitio', 3),
	(3, '498fa3fc155c910ff06417550144161a', 'Qué te gustaría que agregaramos al informe', 1);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;

-- Volcando estructura para tabla prueba.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(4) NOT NULL,
  `modal` tinyint(4) NOT NULL,
  `date_last_session` datetime NOT NULL,
  `date_last_answer` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla prueba.user: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `email`, `password`, `role`, `modal`, `date_last_session`, `date_last_answer`) VALUES
	(1, 'testa1@autofact.cl', 'e99a18c428cb38d5f260853678922e03', 'ADMI', 0, '2017-01-12 20:24:16', '2017-01-12 20:27:27'),
	(2, 'testa2@autofact.cl', '0933dd121ce01e37673b6c2accca9672', 'USER', 0, '2017-01-12 19:18:41', '0000-00-00 00:00:00'),
	(3, 'testa3@autofact.cl', '8bcfb55d1d3779b63f072c0633e5027c', 'VISI', 0, '2017-01-12 20:22:59', '2017-01-12 19:47:17');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
