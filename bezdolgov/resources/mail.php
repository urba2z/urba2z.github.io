<?php

// Подключение библиотеки

use PHPMailer\PHPMailer\PHPMailer;

require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';
require './phpmailer/src/Exception.php';

// Переменные

$title = 'Тема письма';


$c = true;

// Формирование письма

foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
        $body .= "

            " .( $c = !$c ) ? '<tr>': '<tr style = "background-color: "#f8f8f8;">' . "
            <td><b>$key</b></td>
            <td><b>$value</b></td>
        ";
    };
};

$body = "<table>$body</table>";

$mail = new PHPMailer();

try {

    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;

    $mail->Host = 'smtp.gmail.com'; // Хостинг почты отправителя
    $mail->Username = 'arezervnyj05@gmail.com'; //Адрес почты отправителя
    $mail->Password = 'ovyugvbvivpvzjwm'; //Пароль почты отправителя
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    //Адрес почты и имя отправителя
    $mail->setFrom('arezervnyj05@gmail.com', 'Тестовое сообщение');

    //Получатель письма 
    $mail->addAddress('urba2z@yandex.ru');

    //
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    $mail->send();

} catch (Exception $e) {
    $status = "Сообщение не было отправленно. Причина ошибки: {$mail->ErrorInfo}";
}
