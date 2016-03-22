-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2016 at 10:08 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mathgamedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `gamescatalog`
--

CREATE TABLE `gamescatalog` (
  `GameID` int(11) NOT NULL,
  `GameName` varchar(200) COLLATE utf8_bin NOT NULL,
  `Description` varchar(350) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `globalgame`
--

CREATE TABLE `globalgame` (
  `GlobalGameID` int(11) NOT NULL,
  `PlayerID` int(11) NOT NULL,
  `PlayerScore` int(11) NOT NULL,
  `Level` int(11) NOT NULL,
  `GameID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `localgames`
--

CREATE TABLE `localgames` (
  `LocalGameID` int(11) NOT NULL,
  `PlayerID` int(11) NOT NULL,
  `Score` int(11) NOT NULL,
  `Level` int(11) DEFAULT NULL,
  `GameID` int(11) NOT NULL,
  `DateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `PlayerID` int(11) NOT NULL,
  `Username` varchar(50) COLLATE utf8_bin NOT NULL,
  `Password` varchar(155) COLLATE utf8_bin NOT NULL,
  `FirstName` varchar(150) COLLATE utf8_bin NOT NULL,
  `LastName` varchar(150) COLLATE utf8_bin NOT NULL,
  `Class` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `RegistrationDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gamescatalog`
--
ALTER TABLE `gamescatalog`
  ADD PRIMARY KEY (`GameID`);

--
-- Indexes for table `globalgame`
--
ALTER TABLE `globalgame`
  ADD PRIMARY KEY (`GlobalGameID`);

--
-- Indexes for table `localgames`
--
ALTER TABLE `localgames`
  ADD PRIMARY KEY (`LocalGameID`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`PlayerID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gamescatalog`
--
ALTER TABLE `gamescatalog`
  MODIFY `GameID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `globalgame`
--
ALTER TABLE `globalgame`
  MODIFY `GlobalGameID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `localgames`
--
ALTER TABLE `localgames`
  MODIFY `LocalGameID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `PlayerID` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
