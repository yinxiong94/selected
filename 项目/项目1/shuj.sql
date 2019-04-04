SET NAMES UTF8;
DROP DATABASE IF EXISTS selected;
CREATE DATABASE selected CHARSET=UTF8;
use selected;

-- 商品列表 --
CREATE table sec_sp(
  uid  INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  img_url1 VARCHAR(255),
  img_url2 VARCHAR(255),
  img_url3 VARCHAR(255),
  href  VARCHAR(50),
  title VARCHAR(50),
  price DECIMAL(8,2),
  color VARCHAR(10)

);

CREATE TABLE sec_spxq(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  img_url1 VARCHAR(255),
  img_url2 VARCHAR(255),
  img_url3 VARCHAR(255),
  img_url4 VARCHAR(255),
  title  VARCHAR(50),
  price DECIMAL(8,2),
  pid VARCHAR(20),
  activity VARCHAR(20),
  Store VARCHAR(5),
  SIZE  VARCHAR(20),
  color VARCHAR(20),
  fid  int
);

CREATE  table  sec_user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(13),
  upwd  VARCHAR(20)
);

CREATE table sec_spcar(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  id int,
  uid  int,
  img_url VARCHAR(255),
  title VARCHAR(50),
  color VARCHAR(10),
  size VARCHAR(200),
  store VARCHAR(20),
  price DECIMAL(8,2)

)