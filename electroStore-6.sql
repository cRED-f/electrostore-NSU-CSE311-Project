-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 05, 2023 at 04:16 PM
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
-- Database: `electroStore`
--

-- --------------------------------------------------------

--
-- Table structure for table `billboards`
--

CREATE TABLE `billboards` (
  `billboard_id` varchar(255) NOT NULL,
  `products_id` varchar(255) NOT NULL,
  `products_name` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `billboards`
--

INSERT INTO `billboards` (`billboard_id`, `products_id`, `products_name`, `destination`, `image`) VALUES
('030eb982-5391-4370-a766-9a4ddb91caba', 'e659b7cd-25b2-4466-9ab0-f45ead24f39a', 'Galaxy Watch 5', 'carousel', 'image-1697905866715Galaxy_Watch_5.webp'),
('1d2e0927-21be-465e-9561-4328267217e6', '69b93226-ca1b-4315-ab8d-de4b4eb9d821', 'Apple Watch Series 9', 'billboard-4', 'image-169790791931720231014_1697274895_721601.png'),
('664104da-cec0-464a-b363-5d083bab5845', 'dbe1a397-747d-4953-b09b-0d6f99d53b2e', 'Galaxy S23 Ultra', 'billboard-2', 'image-16979064288491WjNGP6SsssOdaK4wGWY3o0jIiTn4fOMDIsWVUlg.jpg'),
('80ae3baa-6a2f-470f-8c14-a577ed78df54', 'ecb7c7af-2891-4fbb-a63e-17e3f8826887', 'iPhone 15 Pro Max', 'carousel', 'image-1697906632127AT82vTRU91c5z4ftoLXSassyJQl07XDoBGtvC1Kz.jpg'),
('926009e4-1c4f-48cd-9935-9694439ae978', '958c6311-b759-4d9b-8b04-251ea386cc21', 'Apple Watch Ultra 2', 'billboard-1', 'image-1697905934335Single_Data_1_Main.webp'),
('bd193a21-ece3-45a7-89b0-c7fe84e40de6', '98422bde-7d8e-4fa3-85cf-5ec5cbd3348f', 'MacBook Pro 13’’ 2022 M2 ', 'billboard-3', 'image-1697906381644Slider_2_Main.webp'),
('f4342aaa-183f-4f24-a9d5-008c4d2e1c00', 'a64db646-374c-4f19-aede-1a218d189dd0', 'Haylou Solar Plus RT3', 'carousel', 'image-1697905705375Budget_Smart_Watch.webp'),
('fcca8ae5-02a9-4db0-99a9-5ca2884967b7', 'e1a85a61-8afe-45a3-9af3-caedd492da70', 'iPhone 15 Pro', 'carousel', 'image-1697905615653Slider_Main_iPhone_14_Pro.webp');

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `ID` varchar(200) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`ID`, `name`, `email`, `password`, `role`) VALUES
('71b61380-ab42-4d36-991d-df8a2d78f537', 'asif', 'asif@gmail.com', '$2b$10$Fw9HClum4mTT0BD9hTQXBOTUcGxv6StYjcF9cWgwzolkTpAkygTzO', 'visitor'),
('9568644d-c17f-402f-acb3-27a56559177d', 'fahim', 'fahim@gmail.com', '$2b$10$NXbat.q/SrA91WXbiqt6/esdzHK8ErzB4UfWb0qw.MRVbE03U7IfC', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `buyer_add_to_cart`
--

CREATE TABLE `buyer_add_to_cart` (
  `cart_id` varchar(255) NOT NULL,
  `buyer_id` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `products_id` varchar(255) NOT NULL,
  `products_name` varchar(200) NOT NULL,
  `discount` int(255) NOT NULL,
  `num_of_booked` int(255) NOT NULL,
  `storage_id` varchar(255) NOT NULL,
  `storage` varchar(255) NOT NULL,
  `price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer_add_to_cart`
--

INSERT INTO `buyer_add_to_cart` (`cart_id`, `buyer_id`, `name`, `email`, `products_id`, `products_name`, `discount`, `num_of_booked`, `storage_id`, `storage`, `price`) VALUES
('27dda72a-4e1b-4297-a1c8-a003a6d9e9f2', '71b61380-ab42-4d36-991d-df8a2d78f537', 'asif', 'asif@gmail.com', 'e6831178-57a1-439c-8ef5-13658ca4e319', 'Galaxy M12', 0, 1, '03f65df4-a3f9-4a46-851e-23e87347f613', '128GB', 15999),
('4b1fa2be-b3df-46db-9f39-9b77347660e9', '71b61380-ab42-4d36-991d-df8a2d78f537', 'asif', 'asif@gmail.com', '958c6311-b759-4d9b-8b04-251ea386cc21', 'Apple Watch Ultra 2', 1000, 1, '52c13447-c38c-4715-be34-a6e305846414', '44MM', 107000),
('e18dac87-fc0c-4ec5-a01c-2f775a780999', '71b61380-ab42-4d36-991d-df8a2d78f537', 'asif', 'asif@gmail.com', '973fe6d0-9526-4ecb-884e-3343f2be2384', 'Galaxy Watch 4', 0, 1, '52c13447-c38c-4715-be34-a6e305846414', '44MM', 108000);

-- --------------------------------------------------------

--
-- Table structure for table `buyer_payment_status`
--

CREATE TABLE `buyer_payment_status` (
  `buyer_payment_id` varchar(255) NOT NULL,
  `payment_req_id` varchar(255) NOT NULL,
  `buyer_id` varchar(255) NOT NULL,
  `products_name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `products_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer_payment_status`
--

INSERT INTO `buyer_payment_status` (`buyer_payment_id`, `payment_req_id`, `buyer_id`, `products_name`, `price`, `products_status`) VALUES
('d1dd03f5-4c1e-4b86-aa5e-7ac336621126', '1c60aac7-03a6-4ad0-9f64-095dea77bde2', '71b61380-ab42-4d36-991d-df8a2d78f537', 'Realme GT Neo 2', 14199, 'reject'),
('f2058929-bd49-4dc4-88bb-c8668439f589', '55a2eaac-648e-4622-8244-7e38420e17e3', '71b61380-ab42-4d36-991d-df8a2d78f537', 'Vivo Y17s', 15999, 'paid');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `types` varchar(100) NOT NULL,
  `id` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`types`, `id`, `image`) VALUES
('Tablets', '2b75df0a-4c13-4761-8725-2a720169a752', 'image-1695992489179Tablets.webp'),
('Smart Watch', '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'image-1695992426963Smart_Watch.webp'),
('Phone', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'image-1695992384416iPhone_14_Pro_Gold.webp'),
('Smart Tv', '9fd44b6d-6ac4-4f3a-93e4-eafbe80b62d6', 'image-1695992411571SmartTv_copy.webp'),
('Laptop', 'e5fe9c3e-c5dd-4ddf-918e-2a58d97e0506', 'image-1695992373554Laptop.webp');

-- --------------------------------------------------------

--
-- Table structure for table `payment_req`
--

CREATE TABLE `payment_req` (
  `payment_req_id` varchar(255) NOT NULL,
  `buyer_id` varchar(255) NOT NULL,
  `cart_id` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `phone_num` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `card_num` varchar(255) DEFAULT NULL,
  `cvv` varchar(10) DEFAULT NULL,
  `expire_date` date DEFAULT NULL,
  `products_name` varchar(200) NOT NULL,
  `total_amount` int(255) NOT NULL,
  `stock` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_req`
--

INSERT INTO `payment_req` (`payment_req_id`, `buyer_id`, `cart_id`, `name`, `email`, `address`, `payment_method`, `phone_num`, `password`, `card_num`, `cvv`, `expire_date`, `products_name`, `total_amount`, `stock`) VALUES
('88a51ef6-1f0c-4a23-939d-de2e02c92e6b', '71b61380-ab42-4d36-991d-df8a2d78f537', '76fe9d2f-adf7-49c7-aacf-a620c2b440ed', 'asif', 'asif@gmail.com', '', 'bkash', '34234', '4324234', '', '', NULL, 'Galaxy Watch 5', 108000, 4),
('da013ce8-44db-4d69-8922-5ce9ef2f9228', '71b61380-ab42-4d36-991d-df8a2d78f537', 'bdb1cb3b-166e-43a9-9443-b1d4ca73b527', 'asif', 'asif@gmail.com', '', 'bkash', '3213', '321312', '', '', NULL, 'Galaxy Watch 5', 108000, 4);

-- --------------------------------------------------------

--
-- Table structure for table `payment_status`
--

CREATE TABLE `payment_status` (
  `payment_status_id` varchar(255) NOT NULL,
  `payment_req_id` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `products_name` varchar(200) NOT NULL,
  `types` varchar(200) NOT NULL,
  `total_amount` int(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `stock` int(100) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_status`
--

INSERT INTO `payment_status` (`payment_status_id`, `payment_req_id`, `name`, `products_name`, `types`, `total_amount`, `payment_method`, `stock`, `status`) VALUES
('33518393-b8e8-4363-8257-718dff5101fd', '1c60aac7-03a6-4ad0-9f64-095dea77bde2', 'asif', 'Realme GT Neo 2', 'Phone', 14199, 'card', 6, 'reject'),
('bc4adffb-90e9-493e-9b83-ee36e6894a5e', '55a2eaac-648e-4622-8244-7e38420e17e3', 'asif', 'Vivo Y17s', 'Phone', 15999, 'card', 9, 'paid'),
('c7e28bb5-a441-4ee8-8181-15bc5d48ea43', '464a97d5-4a96-46dd-b905-6df0f210e70b', 'asif', 'iPhone 15 Pro Max', 'Phone', 145999, 'card', 10, 'paid'),
('fdc96e7d-b9c5-4baa-9042-90346abb12be', '1efb74ca-17a1-4eb1-8613-831976afba83', 'asif', 'Redmi Note 12 Pro', 'Phone', 14999, 'bkash', 5, 'paid');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `products_id` varchar(255) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `discount` int(255) DEFAULT NULL,
  `stock` int(100) NOT NULL,
  `date` date NOT NULL,
  `warranty` int(100) DEFAULT NULL,
  `categories_id` varchar(225) NOT NULL,
  `types` varchar(200) NOT NULL,
  `sub_categories_id` varchar(255) NOT NULL,
  `sub_categories_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`products_id`, `name`, `description`, `discount`, `stock`, `date`, `warranty`, `categories_id`, `types`, `sub_categories_id`, `sub_categories_name`, `image`) VALUES
('02d64d77-9e88-4dc1-8b2e-3b7d15e1aa39', 'MacBook Air 13', 'The MacBook Air 13’’ 2020 M1 is a powerful and portable laptop that is perfect for students, professionals, and creatives. It is powered by the M1 chip, which delivers up to 3.5x faster CPU performance and up to 5x faster graphics performance than the previous generation.\r\n', 1000, 4, '2021-05-11', 2, 'e5fe9c3e-c5dd-4ddf-918e-2a58d97e0506', 'Laptop', '187d0c03-f11e-42ed-b3f6-5123e3ac3eb6', 'Macbook', 'image-1697905127629MacBook_Air_13_2020_M1_Gold.webp'),
('0579981d-f69f-4f6b-bfd1-7af34eed28c2', 'Galaxy S21 FE 5G', 'The Samsung Galaxy S21 FE 5G is a budget-friendly version of the flagship Galaxy S21. It features a sleek design, a powerful Snapdragon 888 5G processor, and a versatile triple-lens camera system.\r\n', 0, 4, '2021-01-01', 1, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903778469samsung_galaxy_s21_fe_olive.webp'),
('0f5834fa-d794-4837-8eae-d88a2e046c1d', 'iPhone 14 Pro Max', 'The iPhone 14 Pro Max is the most advanced iPhone yet, with a powerful A16 Bionic chip, a stunning Super Retina XDR display with ProMotion, and a triple-lens rear camera system with a 48MP wide camera.', 20000, 2, '2023-01-03', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697897758281iPhone_14_Pro_Max_Silver.webp'),
('135e4140-f8f0-48cc-b71c-3c1b65a99c28', 'Galaxy Tab S8', 'The Galaxy Tab S8 is the ultimate tablet for work, play, and everything in between. With its powerful processor, stunning display, and long-lasting battery, you can stay productive all day long. Plus, its versatile S Pen lets you take notes, sketch, and create with ease.\r\n', 0, 5, '2023-10-01', 2, '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'e5c71538-1e7f-4536-93c8-ec72a1ab0062', 'Samsung(Tablets)', 'image-1697904577949Galaxy_Tab_S8_Graphite.webp'),
('1b3288df-56b0-4c3b-8ed1-77208f7695db', 'Galaxy Z Flip4', 'The Galaxy Z Flip4, the most recent addition to Samsung\'s foldable phone lineup, is now available in Bangladesh. The Flip4 is a more refined and polished version of the Flip3, with a number of enhancements\r\n', 5500, 6, '2023-08-16', 0, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903263547Samsung_Galaxy_Z_Flip4_blue.webp'),
('1c55687b-048f-4cd1-bebd-58dbf053c2c0', 'Realme 9 Pro Plus', 'Realme 9 Pro Plus latest and greatest camera phone from Realme. With its 50MP Sony IMX766 main sensor, 8MP ultrawide sensor, and 2MP macro sensor, the Realme 9 Pro Plus takes stunning photos in any lighting condition.\r\n', 500, 10, '2021-11-18', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'b6b6bb68-7174-4b72-9df3-b1252ed24883', 'Realme', 'image-1697904110710Realme_9_Pro_Plus_Sunrise_Blue.webp'),
('2ae49232-917d-4513-aa75-fd00ce1fb2ed', 'iPad Air 5', 'The iPad Air 5 is the latest and most powerful iPad from Apple. It features an A15 Bionic chip, a stunning Liquid Retina display, and a new front-facing camera with Center Stage.\r\n', 0, 5, '2023-01-03', 1, '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'b34b5faf-1844-4167-8de2-d46de443189f', 'Apple (tab)', 'image-1697904692354iPad_Air_5_64GB_WiFi_Purple.webp'),
('2b9c724e-986f-47d1-a1ad-c25d0962674d', 'Galaxy S22 Ultra', 'Samsung Galaxy S22 Ultra: The most powerful Galaxy S yet. With a 6.8-inch Dynamic AMOLED 2X display, 120Hz refresh rate, and Snapdragon 8 Gen 1 processor, the Galaxy S22 Ultra is the ultimate smartphone for gaming, streaming, and productivity.\r\n', 1000, 4, '2021-12-16', 1, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903591572Samsung_Galaxy_S22_Ultra_Burgundy.webp'),
('3bb4ff51-d3e8-4ca5-bbe0-161af107ce92', 'Redmi Note 12 Pro', 'The Redmi Note 12 Pro 5G is a powerful and affordable smartphone that features a 6.67-inch AMOLED display, a MediaTek Dimensity 1080 processor, a 50MP Sony IMX766 main camera, and a 5000mAh battery with 67W fast charging.\r\n', 500, 5, '2023-10-04', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '376cc5be-6898-4e63-9743-4a21aaba8c4b', 'Xiaomi', 'image-1697902444590Redmi_Note_12_Pro_5G_Stardust_Purple.webp'),
('5cad50f8-3209-4856-ad35-21e012bcd554', 'Galaxy M51', 'The Samsung Galaxy M51 is a mid-range smartphone that was released in Bangladesh in September 2020. It has a 6.7-inch Super AMOLED display with a resolution of 1080 x 2400 pixels.\r\n', 0, 12, '2022-10-11', 1, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903365337Samsung_Galaxy_M51_white.webp'),
('64554363-e28c-45e8-ae9e-f743c090e8b9', 'Galaxy S23 FE 5G', 'Samsung Galaxy S23 FE 5G is a powerful and stylish smartphone with a flagship-level display, processor, and camera system. It also has a long-lasting battery and a sleek design.\r\n', 1000, 3, '2023-10-03', 3, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903080506Samsung_Galaxy_S23_FE_mint.webp'),
('69b93226-ca1b-4315-ab8d-de4b4eb9d821', 'Apple Watch Series 9', 'Apple Watch Series 9 is the latest and greatest smartwatch from Apple, and it\'s packed with features that make it the perfect companion for your busy lifestyle.\r\n', 0, 5, '2023-10-03', 2, '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', 'c5de1b9d-28c2-4bd9-b33a-2799faa58c0d', 'Apple (watch)', 'image-1697905519264apple_watch_series_9_midnight.webp'),
('73e1bea5-e880-4637-b5b0-10f3ee16b782', 'Xiaomi 13 Pro', 'Xiaomi 13 Pro is the latest realization of our imaging philosophy and the masterpiece behind the masterpiece.\r\n', 1000, 5, '2023-08-02', 3, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '376cc5be-6898-4e63-9743-4a21aaba8c4b', 'Xiaomi', 'image-1697898945474Xiaomi_13_Pro_white.webp'),
('7402091c-7f4d-486e-a788-54de4ed251db', 'Galaxy Tab S8 Ultra', 'The Samsung Galaxy Tab S8 Ultra is the most powerful and versatile tablet on the market. With its massive 14.6-inch AMOLED display, powerful Snapdragon 8 Gen 1 processor, and S Pen stylus, the Tab S8 Ultra is perfect for work, play, and creativity.\r\n', 0, 10, '2023-10-13', 2, '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'e5c71538-1e7f-4536-93c8-ec72a1ab0062', 'Samsung(Tablets)', 'image-1697904510592galaxy_tab_s8_ultra_graphite.webp'),
('81ec1f4f-9ca5-4e1b-8a64-37b0e0e19137', 'iPad Pro M2', 'The iPad Pro M2 12.9\" 2022 is the most powerful and versatile iPad ever. It features the new M2 chip, which delivers up to 15% faster performance than the previous generation.\r\n', 5000, 6, '2023-10-21', 3, '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'b34b5faf-1844-4167-8de2-d46de443189f', 'Apple (tab)', 'image-1697904761128iPad_Pro_12.9_Inch_M2_silver.webp'),
('8b3b8f58-8261-43e5-bf36-d48e2cb39835', 'Redmi Note 12 4G', 'Redmi Note 12 4G is a budget-friendly smartphone with a large 6.67-inch AMOLED display, a powerful Snapdragon 685 processor, a triple camera system with a 50MP main sensor, and a long-lasting 5000mAh battery.\r\n', 1000, 3, '2023-04-01', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '376cc5be-6898-4e63-9743-4a21aaba8c4b', 'Xiaomi', 'image-1697898804540redmi_note_12_4g_Mint_Green.webp'),
('958c6311-b759-4d9b-8b04-251ea386cc21', 'Apple Watch Ultra 2', 'Apple Watch Ultra 2 is the most advanced and durable Apple Watch ever, with precision dual-frequency GPS, a new S9 SiP with a 64-bit dual-core processor and 4-core Apple Neural Engine, and a customizable Action button.\r\n', 1000, 3, '2023-10-21', 2, '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', 'c5de1b9d-28c2-4bd9-b33a-2799faa58c0d', 'Apple (watch)', 'image-1697905442699Apple_watch_ultra_2.webp'),
('973fe6d0-9526-4ecb-884e-3343f2be2384', 'Galaxy Watch 4', 'The Samsung Galaxy Watch 4 is the latest smartwatch from Samsung, and it\'s packed with features to keep you connected, fit, and healthy. With its sleek design, long battery life, and powerful health-tracking features\r\n', 0, 3, '2023-10-12', 1, '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', 'f6ed512f-299e-4154-97c4-380cf73f283e', 'Samsung(watch)', 'image-1697905362227Galaxy_Watch_4_44mm_black.webp'),
('98422bde-7d8e-4fa3-85cf-5ec5cbd3348f', 'MacBook Pro 13’’ 2022 M2 ', 'The MacBook Pro 13\'\' 2022 M2 is the most powerful MacBook Pro ever, with a new M2 chip that delivers up to 18% faster CPU performance and up to 35% faster GPU performance than the previous generation\r\n', 1000, 5, '2022-02-01', 2, 'e5fe9c3e-c5dd-4ddf-918e-2a58d97e0506', 'Laptop', '187d0c03-f11e-42ed-b3f6-5123e3ac3eb6', 'Macbook', 'image-1697904946147MacBook_Pro_13_2022_M2_silver.webp'),
('9aa88ff3-6536-4e28-8f47-d4b46729aea2', 'iPhone 14 Pro', 'The iPhone 14 Pro is the most advanced iPhone yet, with a powerful A16 Bionic chip, a stunning Super Retina XDR display, and a triple-lens rear camera system with a 48MP wide sensor.\r\n', 0, 4, '2022-01-28', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697897915703iPhone_14_Pro_Max_Silver.webp'),
('9e4b577b-f9ac-43de-b489-5cb695c57aec', 'Nord CE 3 Lite', 'The OnePlus Nord CE 3 Lite 5G is a budget-friendly smartphone that offers a great balance of performance, features, and battery life. It features a 6.72-inch LCD FHD+ display with a 120Hz refresh rate, a Snapdragon 695G processor, up to 8GB of RAM, up to 128GB of storage, and a 5000mAh battery with 67W fast charging.\r\n', 0, 10, '2023-10-02', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '44678313-ce51-4a16-82da-a09c6177a6c8', 'Oneplus', 'image-1697904323150OnePlus_Nord_CE_3_Lite_Pastel_Lime.webp'),
('9fbf19ba-cf79-4773-9195-dd0f6c474947', 'Redmi 12', 'The Redmi 12 (Official) is the latest smartphone from Xiaomi, and it offers a great value for money. It features a powerful MediaTek Dimensity 810 processor, a 6.6-inch FHD+ display, and a 50MP triple-camera system.\r\n', 0, 10, '2023-08-10', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '376cc5be-6898-4e63-9743-4a21aaba8c4b', 'Xiaomi', 'image-1697902365409xiaomi_redmi_12_Polar_Silver.webp'),
('a3774aba-8367-4d2e-acf1-4a2fdb957261', 'iPhone 14 Pro', 'The iPhone 14 Pro is the most advanced iPhone yet, with a powerful A16 Bionic chip, a stunning Super Retina XDR display, and a triple-lens rear camera system with a 48MP wide sensor.', 0, 10, '2022-02-01', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697897863275iPhone_14_Pro_Gold.webp'),
('a64db646-374c-4f19-aede-1a218d189dd0', 'Haylou Solar Plus RT3', 'RT3 Smart Watch 1.43\" AMOLED display, Bluetooth calling, all-day heart rate and SpO2 monitoring, IP68 waterproof, long battery life. Affordable smartwatch with great features.\r\n', 0, 10, '2023-10-03', 0, '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', '6b30ea6d-53e4-4454-a6c8-edce45d9068c', 'Haylou', 'image-1697905215645Haylou_Solar_Plus_RT3_2.webp'),
('ad67b5b1-0be7-4370-afa5-739572542daf', 'Vivo Y17s', 'vivo Y17s is a budget-friendly smartphone with a large display, long-lasting battery, and triple-lens rear camera. It\'s a great option for those looking for a value-for-money phone.\r\n', 0, 9, '2022-02-22', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '48f913eb-f0c3-45d7-96e4-95db77482367', 'Vivo', 'image-1697903863326vivo_y17s_1.webp'),
('b5b18249-51c2-411d-bf39-e4e42b4243de', 'vivo V27e', 'The vivo V27e is officially launching in Bangladesh on September 20, 2023. The phone is expected to be priced at around BDT 25,000. The V27e is a mid-range phone with a 6.58-inch AMOLED display\r\n', 499, 10, '2023-01-31', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '48f913eb-f0c3-45d7-96e4-95db77482367', 'Vivo', 'image-1697903934969Vivo_V27e_Lavender_Purple.webp'),
('bc0304a2-d9db-45be-a315-ed9fd26217c4', 'Realme GT Neo 2', 'Realme GT Neo 2 (Official) is a powerful and stylish 5G smartphone that offers a great balance of performance, battery life, and features..\r\n', 900, 6, '2023-02-07', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'b6b6bb68-7174-4b72-9df3-b1252ed24883', 'Realme', 'image-1697904003422Realme_GT_Neo_2_Neo_Green.webp'),
('c669b221-6302-43c2-a87e-e9ea0c476000', 'iPhone 13', 'The iPhone 13 is the latest and greatest smartphone from Apple. It features a powerful A15 Bionic chip, a stunning OLED display, and a long-lasting battery.\r\n', 20000, 10, '2021-07-22', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697898492149iPhone_13_Red.webp'),
('c6f0845d-cce0-4f60-9f8a-b01ae7e638c5', 'MacBook M1 Pro ', 'The new MacBook Pro 14\" with M1 Pro 10-Core chip is the most powerful MacBook ever. With up to 14x faster CPU performance than the previous generation, it can handle even the most demanding tasks with ease.\r\n', 1000, 1, '2022-06-07', 2, 'e5fe9c3e-c5dd-4ddf-918e-2a58d97e0506', 'Laptop', '187d0c03-f11e-42ed-b3f6-5123e3ac3eb6', 'Macbook', 'image-1697905031315MacBook_M1_Pro_14_10Core_Silver.webp'),
('c7de6a08-8241-49f8-bcf4-c50bf6b0c236', 'iPhone 13', 'The iPhone 13 is the latest and greatest smartphone from Apple. It features a powerful A15 Bionic chip, a stunning OLED display, and a long-lasting battery', 10000, 10, '2021-06-08', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697898425530iPhone_13_Black.webp'),
('cc57f70b-8bcb-4ba2-86b7-3f09912b2bfd', 'OnePlus 11', 'The OnePlus 11 is the latest flagship smartphone from OnePlus, featuring a powerful Snapdragon 8 Gen 1 processor, a stunning 6.7-inch AMOLED display, and a versatile triple-camera system.\r\n', 1000, 6, '2023-10-05', 3, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '44678313-ce51-4a16-82da-a09c6177a6c8', 'Oneplus', 'image-1697904254790OnePlus_11_Eternal_Green.webp'),
('d05fe6c8-1e40-46fb-b0a0-f01f1c4dfb26', 'Galaxy Z Fold 4', 'The Galaxy Z Fold 4 has a 7.6-inch foldable Dynamic AMOLED 2X display on the inside and a 6.2-inch Super AMOLED display on the outside. It is powered by the Qualcomm Snapdragon 8+ Gen 1 processor and has 12GB of RAM and 512GB of storage.\r\n', 5000, 3, '2023-07-12', 3, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903183538Galaxy_Z_Fold_4_Burgendy.webp'),
('d078ada1-5f17-4eb4-bdb8-0eab6bbaaa6a', 'Redmi Note 12 4G', 'Redmi Note 12 4G is a budget-friendly smartphone with a large 6.67-inch AMOLED display, a powerful Snapdragon 685 processor, a triple camera system with a 50MP main sensor, and a long-lasting 5000mAh battery.\r\n', 0, 10, '2023-03-08', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '376cc5be-6898-4e63-9743-4a21aaba8c4b', 'Xiaomi', 'image-1697898733566redmi_note_12_4g_Onyx_Gray.webp'),
('dbe1a397-747d-4953-b09b-0d6f99d53b2e', 'Galaxy S23 Ultra', 'The Galaxy S23 Ultra is the latest flagship smartphone from Samsung, featuring a powerful processor, a versatile camera system, and a long-lasting battery. It is the perfect phone for users who demand the best of the best.\r\n', 10000, 10, '2022-10-22', 1, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903514237GalaxyS23_Ultra_Fantom_black.webp'),
('e1a85a61-8afe-45a3-9af3-caedd492da70', 'iPhone 15 Pro', 'The iPhone 15 Pro is the latest and greatest smartphone from Apple, featuring a powerful A16 Bionic chip, a new 48MP main camera system, and a brighter and more durable display. I\r\n', 0, 3, '2023-10-21', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697898650769iphone_15_pro__Black_Titanium.webp'),
('e441b0f9-7756-4b75-8f61-915cb2bbe91c', 'iPad Mini 6', 'The iPad mini 6 is a powerful and portable tablet that\'s perfect for entertainment, creativity, and productivity. It features the A15 Bionic chip, a larger 8.3-inch Liquid Retina display, and a new design with flat edges.\r\n', 0, 4, '2022-06-07', 1, '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'b34b5faf-1844-4167-8de2-d46de443189f', 'Apple (tab)', 'image-1697904835760iPad_mini_6_pink.webp'),
('e659b7cd-25b2-4466-9ab0-f45ead24f39a', 'Galaxy Watch 5', 'The Samsung Galaxy Watch 5 is the latest smartwatch from Samsung, and it\'s packed with features to help you stay connected, healthy, and active. With its sleek design, long battery life, and advanced health tracking capabilities\r\n', 0, 4, '2023-10-11', 2, '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', 'f6ed512f-299e-4154-97c4-380cf73f283e', 'Samsung(watch)', 'image-1697905842864Galaxy_Watch5_44mm_Graphite.webp'),
('e6831178-57a1-439c-8ef5-13658ca4e319', 'Galaxy M12', 'The Samsung Galaxy M12 is a budget-friendly smartphone that offers a great value for money. It features a 6.5-inch HD+ display, a 90Hz refresh rate, and a massive 6,000mAh battery.\r\n', 0, 4, '2022-10-22', 1, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'fcbff22c-4c24-4626-acba-074caf04fdbe', 'Samsung', 'image-1697903441248samsung_galaxy_M12_black.webp'),
('ecb7c7af-2891-4fbb-a63e-17e3f8826887', 'iPhone 15 Pro Max', 'The iPhone 15 Pro Max is the most powerful and advanced iPhone yet, with a stunning Super Retina XDR display with ProMotion, the powerful A17 Bionic chip, an advanced Pro-Grade Camera System for stunning results.\r\n', 1000, 10, '2023-10-20', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697906600219iphone_15_pro_max_White_Titanium.webp'),
('f17d503a-a248-4839-8f9b-ae21d46777a5', 'iPhone 14 Pro Max', 'The iPhone 14 Pro Max is the most advanced iPhone yet, with a powerful A16 Bionic chip, a stunning Super Retina XDR display with ProMotion, and a triple-lens rear camera system with a 48MP wide camera.', 10000, 2, '2023-01-10', 2, '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', '9eb26b7c-3453-42b7-8be9-923c6a8e8b19', 'Apple', 'image-1697897691587iPhone_14_Pro_Max_Deep_Purple.webp');

-- --------------------------------------------------------

--
-- Table structure for table `storage_options_products`
--

CREATE TABLE `storage_options_products` (
  `storage_id` varchar(255) NOT NULL,
  `products_id` varchar(255) NOT NULL,
  `storage_size` varchar(255) NOT NULL,
  `price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `storage_options_products`
--

INSERT INTO `storage_options_products` (`storage_id`, `products_id`, `storage_size`, `price`) VALUES
('03f65df4-a3f9-4a46-851e-23e87347f613', 'ad67b5b1-0be7-4370-afa5-739572542daf', '128GB', 15999),
('05deb581-1001-40dc-bb15-3c18da38c25a', '3bb4ff51-d3e8-4ca5-bbe0-161af107ce92', '128GB', 27999),
('064fcda2-b8dd-46f3-b62d-15ea8e848a18', 'c7de6a08-8241-49f8-bcf4-c50bf6b0c236', '128GB', 129999),
('18a954a5-e15b-46c9-be90-e4cadcba5798', '81ec1f4f-9ca5-4e1b-8a64-37b0e0e19137', '128GB', 121999),
('20e8e622-2e1d-4df2-9326-5e38a1787651', '1b3288df-56b0-4c3b-8ed1-77208f7695db', '256GB', 147999),
('21fe01d6-e4e9-4378-bbe4-8fe447f46ea3', 'cc57f70b-8bcb-4ba2-86b7-3f09912b2bfd', '256GB', 77499),
('28dfc5c6-69a0-4dd4-bcfc-f267fefbccb7', 'ecb7c7af-2891-4fbb-a63e-17e3f8826887', '256GB', 170000),
('2907b75c-e625-4efa-8229-61083cb3aa41', 'e6831178-57a1-439c-8ef5-13658ca4e319', '128GB', 23499),
('3d9565d6-24c0-46e6-bc29-bc43d774f644', 'c669b221-6302-43c2-a87e-e9ea0c476000', '256GB', 139999),
('43a9d832-c46e-468c-a209-62398fd02406', 'bc0304a2-d9db-45be-a315-ed9fd26217c4', '128GB', 42999),
('49d60da3-76be-4674-aa08-fdde2079a413', 'b5b18249-51c2-411d-bf39-e4e42b4243de', '256GB', 34999),
('4d640a07-935b-4b7b-949b-548a27dd6e41', '0579981d-f69f-4f6b-bfd1-7af34eed28c2', '128GB', 83999),
('4ec2ab31-751e-40b2-8009-958beff3fb0e', '0f5834fa-d794-4837-8eae-d88a2e046c1d', '256GB', 170999),
('52c13447-c38c-4715-be34-a6e305846414', '958c6311-b759-4d9b-8b04-251ea386cc21', '44MM', 108000),
('54c12065-5062-4d20-86c1-7c11d12da4c4', '2b9c724e-986f-47d1-a1ad-c25d0962674d', '256GB', 160000),
('57eadd0a-7fb1-46d7-a2e2-97f59127f80f', 'a3774aba-8367-4d2e-acf1-4a2fdb957261', '128GB', 161999),
('5b049505-7544-4186-8f10-dffa7329a4e4', '9aa88ff3-6536-4e28-8f47-d4b46729aea2', '256GB', 174999),
('617b7fd3-c902-4d58-b078-25e559c9801f', '9e4b577b-f9ac-43de-b489-5cb695c57aec', '128GB', 29499),
('6c1ebe06-1b10-428b-8f64-5be8bcc8ad33', '8b3b8f58-8261-43e5-bf36-d48e2cb39835', '256GB', 20999),
('6cfda541-6134-4d51-a17e-31ccb998199e', '73e1bea5-e880-4637-b5b0-10f3ee16b782', '512GB', 111999),
('775d739e-ba44-4b63-b8f3-07f54823a7b6', 'e1a85a61-8afe-45a3-9af3-caedd492da70', '128GB', 147999),
('7938afb3-f9b0-4f74-ba8c-fa86f8b61380', '69b93226-ca1b-4315-ab8d-de4b4eb9d821', '44MM', 56499),
('84680b98-5509-42f2-aee5-7c39f51595f8', 'c6f0845d-cce0-4f60-9f8a-b01ae7e638c5', '1TB', 224999),
('a41929c2-564a-42b3-9fd9-fc73956e3c9b', '02d64d77-9e88-4dc1-8b2e-3b7d15e1aa39', '256GB', 94999),
('ac61ac0f-c1a8-41e0-a906-5769b9e2d481', 'a64db646-374c-4f19-aede-1a218d189dd0', '0', 4499),
('b9c0047a-35b0-48ad-b90b-5fd5543179ab', '64554363-e28c-45e8-ae9e-f743c090e8b9', '128GB', 68999),
('bd54a6f6-3822-4fe3-a256-8f476b376cb5', '973fe6d0-9526-4ecb-884e-3343f2be2384', '44MM', 16499),
('c0115dc9-df3c-474e-80a3-ae3ed6b51890', '7402091c-7f4d-486e-a788-54de4ed251db', '128GB', 116999),
('c6629f73-fdff-4713-ae30-6878a0b8805f', 'd05fe6c8-1e40-46fb-b0a0-f01f1c4dfb26', '256GB', 245490),
('c6cafded-e95d-4593-b9de-bdec04c0ce8e', '9fbf19ba-cf79-4773-9195-dd0f6c474947', '128GB', 16499),
('cda88319-3831-4bf0-8ea9-b4ec728ab538', 'dbe1a397-747d-4953-b09b-0d6f99d53b2e', '512GB', 232499),
('e243e287-6866-4b8a-9de2-1c1f6d574308', '1c55687b-048f-4cd1-bebd-58dbf053c2c0', '128GB', 35499),
('e5f57b99-ac4c-4424-8989-253f6ca538a9', 'e659b7cd-25b2-4466-9ab0-f45ead24f39a', '44MM', 21499),
('e841e9b6-5c65-46ce-8e48-f47fcb9c6cac', '5cad50f8-3209-4856-ad35-21e012bcd554', '128GB', 29999),
('eead0d09-769b-45bf-9c3f-769cce91ffbf', '135e4140-f8f0-48cc-b71c-3c1b65a99c28', '128GB', 68999),
('f3fa364e-883c-46a0-92a8-a855e0de4cfd', 'e441b0f9-7756-4b75-8f61-915cb2bbe91c', '64GB', 55499),
('f5406b1b-489f-4a90-8f5f-33b85e50786d', 'd078ada1-5f17-4eb4-bdb8-0eab6bbaaa6a', '128GB', 19499),
('f85a6825-1fec-4285-b19e-d64adaad4592', '98422bde-7d8e-4fa3-85cf-5ec5cbd3348f', '256GB', 169999),
('fb3ca75d-e4bb-4380-bed5-374aecde5941', 'f17d503a-a248-4839-8f9b-ae21d46777a5', '128GB', 168999),
('fd9c331b-641c-4f0f-bbec-909bc1c8580a', '2ae49232-917d-4513-aa75-fd00ce1fb2ed', '64GB', 73999);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `sub_categories_id` varchar(255) NOT NULL,
  `categories_id` varchar(255) NOT NULL,
  `categories_name` varchar(255) NOT NULL,
  `sub_categories_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`sub_categories_id`, `categories_id`, `categories_name`, `sub_categories_name`) VALUES
('01bdbfc7-bca6-40b4-993d-8b4e60da3f77', '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'Lenovo'),
('187d0c03-f11e-42ed-b3f6-5123e3ac3eb6', 'e5fe9c3e-c5dd-4ddf-918e-2a58d97e0506', 'Laptop', 'Macbook'),
('376cc5be-6898-4e63-9743-4a21aaba8c4b', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'Xiaomi'),
('44678313-ce51-4a16-82da-a09c6177a6c8', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'Oneplus'),
('48f913eb-f0c3-45d7-96e4-95db77482367', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'Vivo'),
('6b30ea6d-53e4-4454-a6c8-edce45d9068c', '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', 'Haylou'),
('9eb26b7c-3453-42b7-8be9-923c6a8e8b19', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'phone', 'Apple'),
('b34b5faf-1844-4167-8de2-d46de443189f', '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'Apple (tab)'),
('b6b6bb68-7174-4b72-9df3-b1252ed24883', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'Realme'),
('c5de1b9d-28c2-4bd9-b33a-2799faa58c0d', '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', 'Apple (watch)'),
('cdfcbc48-76e7-4962-9a93-7a4298620fea', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'Oppo'),
('e5c71538-1e7f-4536-93c8-ec72a1ab0062', '2b75df0a-4c13-4761-8725-2a720169a752', 'Tablets', 'Samsung(Tablets)'),
('f6ed512f-299e-4154-97c4-380cf73f283e', '2cdc01e5-b4c0-404f-b748-5630e61c599a', 'Smart Watch', 'Samsung(watch)'),
('fcbff22c-4c24-4626-acba-074caf04fdbe', '7d0d1167-9874-4bc4-aca2-c347ad54b70d', 'Phone', 'Samsung');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `billboards`
--
ALTER TABLE `billboards`
  ADD PRIMARY KEY (`billboard_id`),
  ADD KEY `products_id` (`products_id`);

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `buyer_add_to_cart`
--
ALTER TABLE `buyer_add_to_cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `addToCart_buyer_fk` (`buyer_id`),
  ADD KEY `products_id` (`products_id`),
  ADD KEY `storage_id` (`storage_id`);

--
-- Indexes for table `buyer_payment_status`
--
ALTER TABLE `buyer_payment_status`
  ADD PRIMARY KEY (`buyer_payment_id`),
  ADD KEY `buyer_id` (`buyer_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_req`
--
ALTER TABLE `payment_req`
  ADD PRIMARY KEY (`payment_req_id`),
  ADD KEY `buyer_id` (`buyer_id`),
  ADD KEY `cart_id` (`cart_id`);

--
-- Indexes for table `payment_status`
--
ALTER TABLE `payment_status`
  ADD PRIMARY KEY (`payment_status_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`products_id`),
  ADD KEY `categories_id` (`categories_id`),
  ADD KEY `sub_categories_id` (`sub_categories_id`);

--
-- Indexes for table `storage_options_products`
--
ALTER TABLE `storage_options_products`
  ADD PRIMARY KEY (`storage_id`),
  ADD KEY `products_id` (`products_id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`sub_categories_id`),
  ADD KEY `categories_id` (`categories_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `billboards`
--
ALTER TABLE `billboards`
  ADD CONSTRAINT `billboards_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`products_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `buyer_add_to_cart`
--
ALTER TABLE `buyer_add_to_cart`
  ADD CONSTRAINT `buyer_add_to_cart_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyer` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `buyer_add_to_cart_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`products_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `buyer_add_to_cart_ibfk_3` FOREIGN KEY (`storage_id`) REFERENCES `storage_options_products` (`storage_id`);

--
-- Constraints for table `buyer_payment_status`
--
ALTER TABLE `buyer_payment_status`
  ADD CONSTRAINT `buyer_payment_status_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyer` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment_req`
--
ALTER TABLE `payment_req`
  ADD CONSTRAINT `payment_req_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyer` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`sub_categories_id`) REFERENCES `sub_categories` (`sub_categories_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `storage_options_products`
--
ALTER TABLE `storage_options_products`
  ADD CONSTRAINT `storage_options_products_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`products_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD CONSTRAINT `sub_categories_ibfk_1_point_to_categories_id` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
