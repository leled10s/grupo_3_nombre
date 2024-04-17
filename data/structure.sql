CREATE DATABASE IF NOT EXISTS `guitar_app`;

USE guitar_app;

CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` int(11) NOT NULL
);

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(255) NOT NULL
);

CREATE TABLE `color` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `color` int(11) NOT NULL
);

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL
);

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  FOREIGN KEY (`color_id`) REFERENCES `color` (`id`)
); 

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `units` tinyint(3) UNSIGNED NOT NULL,
  `date_added` date NOT NULL,
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `shopping_hist` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `sell_price` decimal(10,0) NOT NULL,
  `units_sold` tinyint(3) UNSIGNED NOT NULL,
  `sell_date` date NOT NULL,
  `pay_method` varchar(255) NOT NULL,
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
); 

