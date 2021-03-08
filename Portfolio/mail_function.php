<?php
    $email = $_POST['email'];
    $title = 'お問い合わせありがとうございます。';
    $message = 'お問い合わせ内容をご確認ください。';

    $message = 'お名前:' . $_POST['onamae'] . "\n";
    $message = 'Email:' . $_POST['email'] . "\n";
    $message = 'お問い合わせ内容:' . $_POST['inquiry'] . "\n";

    echo $email;
    echo '<br>'
    echo $title;
    echo '<br>';
    echo $message;

    // DB接続、データ保存 
    require_once('db_connect.php');
    // INSERT文を作成
    // $dbhはdb_connect.phpを読み込んだから使える
    $stmt = $dbh->prepare('INSERT INTO surveys (nickname, email, content) VALUES(?, ?, ?)');
    // INSERT文実行
    $nickname = $_POST['onamae'];
    $email = $_POST['email'];
    $content = $_POST['inquiry'];
    $stmt->execute([$nickname, $email, $content]);

    // if(mb_send_mail($email, $title, $message)) {
    //     echo '送信完了';
    //     header('Location:thanks.html');
    // } else {
    //     echo '送信失敗';
    // }

?>