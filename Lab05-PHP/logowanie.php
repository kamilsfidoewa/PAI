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
    <?php
    function is_valid_login($username, $password)
    {
        global $osoba1, $osoba2;
        if (($username == $osoba1->login) && ($password == $osoba1->haslo)) {
            return $osoba1->imieNazwisko;
        } elseif (($username == $osoba2->login) && ($password == $osoba2->haslo)) {
            return $osoba2->imieNazwisko;
        } else {
            return null;
        }
    }
    echo "<h1>Nasz system</h1>";
    if (isset($_POST["send"])) {
        $user = is_valid_login(test_input($_POST["login"]), test_input($_POST["haslo"]));
        if (isset($user)) {
            $_SESSION["zalogowanyImie"] = $user;
            $_SESSION["zalogowany"] = 1;
            header("Location:user.php");
        } else {
            header("Location:index.php");
        }


    }

    ?>
    <form action="logowanie.php" method="POST">
        <fieldset class="person">
            <legend>Logowanie</legend>
            Login: <input type="text" name="login" /><br>
            Hasło: <input type="password" name="haslo" /><br>
            <input type="submit" name="send" value="Zaloguj">
    </form>
</body>

</html>