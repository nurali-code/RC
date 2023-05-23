<?php 
// https://api.telegram.org/bot5885608071:AAHSR05I7N1iaz6WS3F4lKclaI27gVpgra0/getUpdates

$headline = $_POST['form'];
$name = $_POST['u-name'];
$phone = $_POST['u-phone'];
$terms = $_POST['u-terms'];
$price = $_POST['u-price'];

$token = "5885608071:AAHSR05I7N1iaz6WS3F4lKclaI27gVpgra0";
$chat_id = "-896092337";

$arr = array(
    'Форма: ' => $headline,
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Сумма ипотеки: ' => $price,
    'Срок кредитования: ' => $terms
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    
if ($sendToTelegram) {
    exit;
} else {
    echo 'Error';
}


