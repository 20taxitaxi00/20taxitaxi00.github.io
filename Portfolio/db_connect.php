<?php
    $dsn = 'mysql:dbname=contact_form;host=localhost';
    $user = 'root';
    $password = '';
    $dbh = new PDO($dsn, $user, $password);
    $dbh->query('SET NAMES UTF8');
?>