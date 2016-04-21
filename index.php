<?php
session_start(); // начало сессии: если сессии еще нет 
// (не пришел Cookie "PHPSESSID" или нет файла сессии, 
//  соответствующего значению cookie "PHPSESSID"), то:
//  1) генерируется уникальный идентификатор сессии;
//  2) устанавливается Cookie "PHPSESSID" со значением этого идентификатора
//  3) создается файл сессии с соответствующим идентификатору именем
//  4) инициализируется суперглобальный массив $_SESSION, который проецируется на файл сессии
//--- конфигурационные параметры ---
$db_drivername = "mysql";
$hostname = "localhost";
$dbname = "web";
$username = "root";
$password = "";
//--- Создание PDO для соединения с сервером БД ---
$pdo = new PDO("{$db_drivername}:host={$hostname};dbname={$dbname}", $username, $password);
//--- 1 параметр PDO: "mysql:host=localhost;dbname=weblabdb"
//--- 2 параметр PDO: "root"
//--- 3 параметр PDO: ""
$pdo->query("SET CHARACTER SET utf8"); // установка кодировки символов для текущего соединения с MySQL Server

require_once 'blocks/auth.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Italy for me</title>
        <link rel="shortcut icon" href="img/italy.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/style.css">      
    </head>
    <body>        
        <div  id="header">
            <?php include 'blocks/header.php'; ?>
        </div>
        <div class="search">
            <form>
                <input type="search" name="q" placeholder="Поиск по сайту"> 
                <input type="submit" value="Найти">
            </form>
        </div>
        <?php include 'blocks/auth_form.php';?>
        <div class="content regular ">
            <div class="caside">
                <div class="menu main">
                    <?php include 'blocks/menu.php'; ?>
                </div>
                <div class="contact copy">
                    <p>Телефон: 0994389911 </p>
                </div>
            </div>
            <div class="ccontent">
                <?php
                $url = '\'' . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) . '\'';
                $menu_item_result = $pdo->query("SELECT * FROM  `page` WHERE url=" . $url);
                if ($menu_item_result->rowCount() > 0) {
                    $menu_item = $menu_item_result->fetch(PDO::FETCH_ASSOC);
                    echo $menu_item['content'];
                } else {
                    echo 'Неверный URL!!!';
                }
                ?>

                <div>
                    <p class="center">
                        <a href="http://www.edimdoma.ru/"><img  src="img/partner1.gif" width=100 height=50 alt="Едим дома"></a>
                        <a href="https://www.facebook.com/MasterChefUA"><img  src="img/partner3.png" width=100 height=50 alt="Мастер Шеф"></a>
                        <a href="http://www.1tv.ru/sprojects_editions/si=23"><img  src="img/partner2.png" width=100 height=50 alt="Смак"></a>
                    </p>
                </div>
            </div>
            <div class="center bottommenu ">
                <?php include 'blocks/menu.php' ?>
            </div>
        </div>
        <div class="aside">
            <?php include 'blocks/aside.php';?>
            <div class="copy"> 
                <label id="copyright">Date/Time</label>
                <p>
                    Maria Gulko&copy;2016 
                </p>
            </div>
        </div>
        <script src="/js/jquery-2.1.4.min.js"></script>
        <script src="/js/lr6.js"></script>
        <script src="/js/DateFormat.js"></script>
    </body>
</html>