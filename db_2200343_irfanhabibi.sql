-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 12:53 PM
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
-- Database: `db_2200343_irfanhabibi`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory_irfanhabibi`
--

CREATE TABLE `inventory_irfanhabibi` (
  `id` int(255) NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `jumlah` int(255) NOT NULL,
  `harga_satuan` int(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory_irfanhabibi`
--

INSERT INTO `inventory_irfanhabibi` (`id`, `nama_barang`, `jumlah`, `harga_satuan`, `lokasi`, `deskripsi`) VALUES
(1, 'ROG\r\n', 4, 20000000, 'Bandung', 'Asus\r\n'),
(2, 'MACBOOK\r\n', 2, 17000000, 'Jakarta', 'Apple'),
(3, 'IDEAPAD\r\n', 3, 9000000, 'Denpasar', 'Lenovo\r\n'),
(4, 'TUF\r\n', 4, 15000000, 'Manokwari', 'Asus'),
(5, 'ASPIRE\r\n', 5, 12000000, 'Bandung', 'Acer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory_irfanhabibi`
--
ALTER TABLE `inventory_irfanhabibi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory_irfanhabibi`
--
ALTER TABLE `inventory_irfanhabibi`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
