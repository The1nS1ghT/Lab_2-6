<?php
$user = 'root';
$pass = '';
global $user, $pass;
$conn = new PDO('mysql:host=localhost;dbname=kinoobzor', $user, $pass);
global $conn;
?>