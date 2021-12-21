<?php
$user = 'root';
$pass = '';
global $user, $pass;
$conn = new PDO('mysql:host=localhost;dbname=kinoobzor', $user, $pass);
global $conn;
 
try {
$conn = new PDO('mysql:host=localhost;dbname=kinoobzor', $user, $pass);
$sql = "SELECT * FROM posts ";
$result = $conn->query($sql);
$get_count = $result->rowCount();
$sql = "SELECT * FROM posts";

$result = $conn->query($sql);

}
catch (PDOException $e) {
echo "Database error: " . $e->getMessage();
}
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/style.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <title>kino-obzor</title>
</head>
<body>
<div class="wrapper">
    <div class="header">
        <div class="headerWrapper">
                <a href="">
                  <img src="image/logo.png">
                </a>
                <input type="text" class="headerWrapperSearchInp" placeholder="поиск">
                <input type="button" class="headerWrapperSearchBtn" value="найти">
            <div class="headerWrapperAuth">
                <input href="#PopupAuth" type="button" class="headerWrapperAuthBtn" value="вход">
                <input href="#PopupReg" type="button" class="headerWrapperRegBtn" value="регистрация">
            </div>
        </div>
    </div>
    <div class="predmain">
    <?php
        while($row = $result->fetch()){
    ?>
    <div class="main">
<div class="textcard"><?php echo $row['post_name']?></div>
<a><img src=<?php echo $row['post_img'] ?> class="post_img" alt=""></a>
<div class="textcard"> добавлено в  <?php echo $row['post_date']?></div>
    </div>
        <?php 
        }
        ?>
        </div>
    <div class="footer"></div>
</div>
<div class="PopupBgAuth" id="authorization">
    <form action="#" class="PopupBodyAuth" id="PopupBodyAuth">
        <p class="PopupBodyHeader">Вход</p>
        <label>
            <input type="text" name="UserEmail" placeholder="E-mail">
        </label>
        <label>
            <input type="password" name="UserPassword" placeholder="пароль">
        </label>
        <button class="PopupBodyAuthBtn" type="submit">войти</button>
        <a href="#PopupBodyReg" class="PopupBodyRegBtn">Еще нет аккаунта? Пожалуйста, зарегистрируйтесь</a>
    </form>
</div>
<div class="PopupBgReg" id="registration">
    <form action="#" class="PopupBodyReg" id="PopupBodyReg">
        <p class="PopupBodyHeaderReg">Регистрация</p>
        <p class="PopupBodyHeaderWel">Добро пожаловать на KINO-OBZOR</p>
        <label>
            <input type="text" name="UserName" placeholder="имя">
        </label>
        <label>
            <input type="text" name="UserEmail" placeholder="E-mail">
        </label>
        <label>
            <input type="tel" name="UserPhone" placeholder="телефон">
        </label>
        <label>
            <input type="password" name="UserPassword" placeholder="пароль">
        </label>
        <label>
            <input type="password" name="UserRepeatPassword" placeholder="повторите пароль">
        </label>
        <span class="RegCheckbox__text"><input name="RegCheckbox" class="PopupContentRegCheck" type="checkbox" value="true">Я принимаю условия политики конфеденциальности</span>
        <button class="PopupBodyBtnReg" type="submit">зарегистрироваться</button>
        <a href="#authorization" class="PopupBodyBtnAuth">уже есть аккаунт? Войти</a>

    </form>
</div>
<script src="js/script.js"></script>
</body>
</html>