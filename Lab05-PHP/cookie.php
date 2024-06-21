<?php session_start(); ?>
<?php
require_once ("functions.php");
?>

<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <a href="index.php">Wstecz</a><br>
    <?php
    $time = $_SESSION["czas_cookie"];
    setcookie("user", "someone", time() + $time, "/");
    if (isset($_COOKIE["user"])) {
        echo "cookie " . $_COOKIE['user'] . " zostało utworzone.<br>";
    }
    ?>

</body>

</html>