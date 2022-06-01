-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 02-06-2022 a las 01:08:08
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reyban_gafas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autorizados`
--

CREATE TABLE `autorizados` (
  `user` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autorizados`
--

INSERT INTO `autorizados` (`user`, `email`, `password`) VALUES
('admin', 'rey-ban@argentina.com', '21232f297a57a5a743894a0e4a801fc3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock_gafas`
--

CREATE TABLE `stock_gafas` (
  `id` int(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `cantidad` int(100) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock_gafas`
--

INSERT INTO `stock_gafas` (`id`, `modelo`, `tipo`, `descripcion`, `cantidad`, `img`) VALUES
(32, 'Clubmaster-classic', 'Sol', 'Solo en talle s', 3, 'c2b5vk6xpwfvob5sunyh'),
(34, 'Clubmaster-Metal', 'Sol', '', 3, 'hrezpdrfi2m14tmpjogb'),
(35, 'Hexagonal-Flat-Lenses', 'Sol', 'Modelo unisex', 6, 'ma8whpktbgy83cw8mkz0'),
(36, 'Justin-Classic', 'Sol', '', 2, 'cplc7xd9qgn8cgmei5zb'),
(37, 'New-Wayfarer-Classic', 'Sol', '', 1, 'brtsruvszzueu3t2iinz'),
(38, 'Round-Double-Bridge', 'Sol', '', 2, 'xhzcmasnsansgfn3ynte'),
(39, 'Wayfarer-2-Classis', 'Sol', '', 3, 'pq7hmr5i05cf61xmwpds'),
(40, 'RB7151-Hexagonal-Optics', 'Vision', '', 8, 'pehw3tau0enh8rjjsun7'),
(41, 'Aviator-Optics', 'Vision', 'Color Gold & Black', 5, 'xpdzrkgwf2piuhxpercw'),
(42, 'Clubmaster-Optics', 'Vision', 'Marco en talle S & M', 1, 'ifdcbi245pjli15vhnyf'),
(43, 'Erika-Optics', 'Vision', 'Marco opcional color blanco', 2, 'ado1dae5u20uo40fsyfr'),
(44, 'Hexagonal-Optics', 'Vision', 'Marco en color Silver, Gold, Pink-Gold & BlackSilver', 4, 'egniturmfywkormfsrbg'),
(45, 'New-Wayfarer-Optics', 'Vision', '', 1, 'gadqph1wahvz4acmtkrn'),
(46, 'RB2180V-Optics', 'Vision', '', 3, 'nyfregzazdaq437zbpwb'),
(47, 'RB5228-Optics', 'Vision', '', 4, 'lgwwcfenjmnxtubswlhe'),
(48, 'Round-Metal-Optics', 'Vision', 'Marco en color Silver, Gold, Pink-Gold & BlackSilver	', 4, 'nln2th6srjpjvzxcryox'),
(49, 'Wayfarer-Ease-Optics', 'Vision', 'Marco en color negro', 1, 'h0k9ogv5jtdgqdygkaoq');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `stock_gafas`
--
ALTER TABLE `stock_gafas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `stock_gafas`
--
ALTER TABLE `stock_gafas`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
