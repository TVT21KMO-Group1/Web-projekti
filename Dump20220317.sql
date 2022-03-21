CREATE DATABASE  IF NOT EXISTS `webdatabase` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webdatabase`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: webdatabase
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `kayttaja`
--

DROP TABLE IF EXISTS `kayttaja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kayttaja` (
  `idKayttaja` int NOT NULL AUTO_INCREMENT,
  `Nimi` varchar(45) NOT NULL,
  `Osoite` varchar(45) NOT NULL,
  `PuhNro` double NOT NULL,
  `Salasana` varchar(255) NOT NULL,
  `OnOmistaja` int DEFAULT NULL,
  `Ravintola_idRavintola` int DEFAULT NULL,
  PRIMARY KEY (`idKayttaja`),
  UNIQUE KEY `idKayttajat_UNIQUE` (`idKayttaja`),
  KEY `fk_Kayttajat_Ravintola_idx` (`Ravintola_idRavintola`),
  CONSTRAINT `fk_Kayttajat_Ravintola` FOREIGN KEY (`Ravintola_idRavintola`) REFERENCES `ravintola` (`idRavintola`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kayttaja`
--

LOCK TABLES `kayttaja` WRITE;
/*!40000 ALTER TABLE `kayttaja` DISABLE KEYS */;
/*!40000 ALTER TABLE `kayttaja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ravintola`
--

DROP TABLE IF EXISTS `ravintola`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ravintola` (
  `idRavintola` int NOT NULL AUTO_INCREMENT,
  `Nimi` varchar(45) NOT NULL,
  `Osoite` varchar(45) NOT NULL,
  `Aukeamisaika` int NOT NULL,
  `Sulkemisaika` int NOT NULL,
  `RavintolanTyyppi` varchar(45) NOT NULL,
  `Hintataso` varchar(45) NOT NULL,
  PRIMARY KEY (`idRavintola`),
  UNIQUE KEY `idRavintola_UNIQUE` (`idRavintola`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ravintola`
--

LOCK TABLES `ravintola` WRITE;
/*!40000 ALTER TABLE `ravintola` DISABLE KEYS */;
/*!40000 ALTER TABLE `ravintola` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruoka`
--

DROP TABLE IF EXISTS `ruoka`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruoka` (
  `idRuoka` int NOT NULL AUTO_INCREMENT,
  `Tuote` varchar(45) NOT NULL,
  `Kuvaus` varchar(45) NOT NULL,
  `Hinta` double NOT NULL,
  `Tuotekategoria_idTuotekategoria` int NOT NULL,
  PRIMARY KEY (`idRuoka`),
  UNIQUE KEY `idRuokalista_UNIQUE` (`idRuoka`),
  KEY `fk_Ruoka_Tuotekategoria1_idx` (`Tuotekategoria_idTuotekategoria`),
  CONSTRAINT `fk_Ruoka_Tuotekategoria1` FOREIGN KEY (`Tuotekategoria_idTuotekategoria`) REFERENCES `tuotekategoria` (`idTuotekategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruoka`
--

LOCK TABLES `ruoka` WRITE;
/*!40000 ALTER TABLE `ruoka` DISABLE KEYS */;
/*!40000 ALTER TABLE `ruoka` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tilatuttuotteet`
--

DROP TABLE IF EXISTS `tilatuttuotteet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tilatuttuotteet` (
  `idTilatutTuotteet` int NOT NULL AUTO_INCREMENT,
  `Tuotteet` int NOT NULL,
  `Tilaus_idTilaus` int NOT NULL,
  PRIMARY KEY (`idTilatutTuotteet`),
  KEY `fk_TilatutTuotteet_Tilaus1_idx` (`Tilaus_idTilaus`),
  CONSTRAINT `fk_TilatutTuotteet_Tilaus1` FOREIGN KEY (`Tilaus_idTilaus`) REFERENCES `tilaus` (`idTilaus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tilatuttuotteet`
--

LOCK TABLES `tilatuttuotteet` WRITE;
/*!40000 ALTER TABLE `tilatuttuotteet` DISABLE KEYS */;
/*!40000 ALTER TABLE `tilatuttuotteet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tilaus`
--

DROP TABLE IF EXISTS `tilaus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tilaus` (
  `idTilaus` int NOT NULL AUTO_INCREMENT,
  `Aika` datetime(6) NOT NULL,
  `idKayttaja` int DEFAULT NULL,
  `idRavintola` varchar(45) DEFAULT NULL,
  `Summa` double DEFAULT NULL,
  `Kayttaja_idKayttaja` int NOT NULL,
  PRIMARY KEY (`idTilaus`),
  UNIQUE KEY `idTilaushistoria_UNIQUE` (`idTilaus`),
  KEY `fk_Tilaus_Kayttaja1_idx` (`Kayttaja_idKayttaja`),
  CONSTRAINT `fk_Tilaus_Kayttaja1` FOREIGN KEY (`Kayttaja_idKayttaja`) REFERENCES `kayttaja` (`idKayttaja`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tilaus`
--

LOCK TABLES `tilaus` WRITE;
/*!40000 ALTER TABLE `tilaus` DISABLE KEYS */;
/*!40000 ALTER TABLE `tilaus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tuotekategoria`
--

DROP TABLE IF EXISTS `tuotekategoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tuotekategoria` (
  `idTuotekategoria` int NOT NULL AUTO_INCREMENT,
  `Tuotekategoria` varchar(45) NOT NULL,
  `Ravintola_idRavintola` int NOT NULL,
  PRIMARY KEY (`idTuotekategoria`),
  KEY `fk_Tuotekategoria_Ravintola1_idx` (`Ravintola_idRavintola`),
  CONSTRAINT `fk_Tuotekategoria_Ravintola1` FOREIGN KEY (`Ravintola_idRavintola`) REFERENCES `ravintola` (`idRavintola`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tuotekategoria`
--

LOCK TABLES `tuotekategoria` WRITE;
/*!40000 ALTER TABLE `tuotekategoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `tuotekategoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'webdatabase'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-17 16:36:20
