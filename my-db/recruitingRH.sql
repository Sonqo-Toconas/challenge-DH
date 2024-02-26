CREATE DATABASE  IF NOT EXISTS `recruitingrh` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `recruitingrh`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: recruitingrh
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applicants`
--

DROP TABLE IF EXISTS `applicants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `URL_linkedin` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sex` enum('Male','Female','Other') NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `professions_id` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email` (`email`),
  KEY `professions_id` (`professions_id`),
  CONSTRAINT `applicants_ibfk_1` FOREIGN KEY (`professions_id`) REFERENCES `professions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicants`
--

LOCK TABLES `applicants` WRITE;
/*!40000 ALTER TABLE `applicants` DISABLE KEYS */;
INSERT INTO `applicants` VALUES (1,'39456783','Gloria','Medina','gloria@gmail.com','3885769804',NULL,'1987-06-02','Female',NULL,'glo123',1,'2024-02-20',NULL,NULL),(2,'40768976','Daniel','Fuentes','dani@gmail.com','3885487655',NULL,'1988-10-12','Male',NULL,'dan123',2,'2024-02-20',NULL,NULL),(3,'39398634','Tim','Tim','tim@gmail.com','3885047856',NULL,'1997-12-05','Female',NULL,'tim123',3,'2024-02-20',NULL,NULL),(4,'40450831','Rocio','Carle','roo@gmail.com','3885492413',NULL,'1999-07-26','Female',NULL,'ro123',4,'2024-02-20',NULL,NULL),(5,'39098764','Victor','Fuentes','vic@gmail.com','3885769095',NULL,'1987-11-22','Male',NULL,'vic123',5,'2024-02-20',NULL,NULL),(6,'39123567','Luis','Fuentes','luis@gmail.com','3885429017',NULL,'1998-09-18','Male',NULL,'luis123',6,'2024-02-20',NULL,NULL);
/*!40000 ALTER TABLE `applicants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Microsoft','Microsoft, fundada en 1975 por Bill Gates y Paul Allen, es líder en tecnología con Windows, Office y Xbox. Su impacto abarca hardware, servicios en la nube y juegos, siendo una fuerza clave en la evolución tecnológica.'),(2,'Amazon','Amazon, creada por Jeff Bezos en 1994, es líder mundial en comercio electrónico. Desde libros hasta tecnología, destaca en servicios en la nube con AWS y en entretenimiento digital con Alexa.'),(3,'Spotify','Spotify, fundada en 2006 en Suecia, es una plataforma líder de transmisión de música en línea que ofrece acceso a un extenso catálogo de canciones y listas de reproducción, con opciones gratuitas y premium.'),(4,'Google','Google es una empresa líder en tecnología, conocida por su motor de búsqueda y servicios en línea. Fundada en 1998 por Larry Page y Sergey Brin, ha crecido como una de las compañías más influyentes del mundo.'),(5,'Samsung','Samsung, empresa surcoreana fundada en 1938, destaca globalmente por sus productos electrónicos, desde teléfonos inteligentes hasta electrodomésticos y componentes semiconductores.'),(6,'Nokia','Nokia, compañía finlandesa fundada en 1865, es reconocida mundialmente por su presencia en la industria de las telecomunicaciones, especialmente en teléfonos móviles.'),(7,'Mercado Libre','Mercado Libre, fundada en 1999 en Argentina por Marcos Galperin, es una destacada plataforma de comercio electrónico en América Latina, ofreciendo una amplia variedad de productos y servicios financieros en línea.'),(8,'Apple','Apple, fundada en 1976, es una destacada empresa tecnológica de EE. UU. Con productos icónicos como iPhone y Mac, es líder en innovación y diseño.'),(9,'7ecno Shop','Un eCommerce que se especializa en la venta de celulares, accesorios y personalizaciones para estos. Su audiencia tiene como objetivo a los adolescentes');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professions`
--

DROP TABLE IF EXISTS `professions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professions`
--

LOCK TABLES `professions` WRITE;
/*!40000 ALTER TABLE `professions` DISABLE KEYS */;
INSERT INTO `professions` VALUES (1,'Administrador','2024-02-20',NULL,NULL),(2,'Tecnico de sonido','2024-02-20',NULL,NULL),(3,'Linguista','2024-02-20',NULL,NULL),(4,'Profesor','2024-02-20',NULL,NULL),(5,'Computista','2024-02-20',NULL,NULL),(6,'Economista','2024-02-20',NULL,NULL);
/*!40000 ALTER TABLE `professions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-25 13:49:51
