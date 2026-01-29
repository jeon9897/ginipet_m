-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 26-01-22 09:44
-- 서버 버전: 10.4.32-MariaDB
-- PHP 버전: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `kdt`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `ginipet_users`
--

CREATE TABLE `ginipet_users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 테이블의 덤프 데이터 `ginipet_users`
--

INSERT INTO `ginipet_users` (`id`, `username`, `password`, `email`, `tel`, `created_at`) VALUES
(1, 'test1', '$2b$10$dcvYy4KFongBFO0ucxyAOeMSolyAOs0JmIK0MTYf9VrC4gDJSGujW', 'jeon9897@naver.com', '01011112222', '2026-01-20 10:30:04'),
(2, 'test', '$2b$10$3VxcvGzILEQQYbTK/csEsOiLMSXgHzMX911YA8PjguUjXX3kvZMfm', 'jeon9897@naver.com', '01011112222', '2026-01-20 10:50:18'),
(3, 'test2', '$2b$10$fIJrFdDlVIaMFxwOQREE5ewoPdUKwJBdE7/k1C0IECKqDHiKeCRMq', 'jeon9897@naver.com', '01011112222', '2026-01-20 10:58:57'),
(4, 'test3', '$2b$10$zCxNiymS1oaue5yXZidZgeKjp2Z1buFT9.ntc/col/ltljGWZFKpK', 'jeon9897@naver.com', '01011112222', '2026-01-20 11:12:37'),
(5, 'test4', '$2b$10$MHaXdz8jE88qgQZBi4kbqu9IPApW/z2c2g1N/2iGKU3k6O2DLlp1i', 'jeon9897@naver.com', '01011112222', '2026-01-20 11:35:55'),
(6, 'jeon', '1234', 'a@naver.com', '01012345678', '2026-01-20 15:00:00'),
(7, 'test5', '$2b$10$eN08O5p3/guzi53svKKAZupOM1MrtxL1VGN7KVBh5drRuKJ.9tCKO', 'jeon9897@naver.com', '01012345678', '2026-01-21 03:32:02'),
(8, 'admin', '$2b$10$c5387vS67iJcoRw4rbERi.lEfHo.H.Nbq8xX5p/NPZZVFibMLBIhm', 'jeon9897@naver.com', '01012341234', '2026-01-22 01:10:52');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `ginipet_users`
--
ALTER TABLE `ginipet_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `ginipet_users`
--
ALTER TABLE `ginipet_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
