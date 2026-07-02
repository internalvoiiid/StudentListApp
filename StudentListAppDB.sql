-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 05:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c237_StudentListApp`
--
CREATE DATABASE IF NOT EXISTS `c237_StudentListApp` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `c237_StudentListApp`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `students` (
  `studentId` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `dob` date NOT NULL,
  `contact` varchar(10) NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `students` (`studentId`, `Name`, `dob`, `contact`, `image`) VALUES
(1, 'John Edward', '2007-05-08', 98765432, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5BsD30cBd2Kmrs1a42rH6ai7pk9XNZ4v7uzuhoiFcQ&s=10'),
(2, 'Mary Thomson', '2006-02-06', 98765678, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtegpQgeF_ML5vjz7Vno5rp3oukfH6vZdW-BSohU_NGA&s=10'),
(3, 'Benny Teo', '2006-08-18', 98789879, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNdiJ6Uons8tqz52_I4dd_kcaDCplnl2Hnnvk-RMS0g&s=10');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
