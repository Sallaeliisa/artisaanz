<?php
echo '<pre';
print_r($_POST);
echo '</pre>';

$sent_status = mail('laura.jarventie@edu.bc.fi', ($_POST['name']) , ($_POST['email']), ($_POST['message']));

if ($sent_status) {
    echo 'message was delivered';
} else {
    echo 'message was NOT send';
};
?>