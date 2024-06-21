<?php
    // $link = mysqli_connect("localhost", "scott", "tiger", "instytut");
    
    // if (!$link) {
    //     printf("Connect failed: %s\n", mysqli_connect_error());
    //     exit();
    // }

    // echo "<a href='form06_get.php'>Lista pracowników</a><br>";
    session_start();
    print<<<KONIEC
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    </head>
    <body>
    <a href='form06_get.php'>Lista pracowników</a><br>
    <form action="form06_redirect.php" method="POST">
    id_prac <input type="text" name="id_prac">
    nazwisko <input type="text" name="nazwisko">
    <input type="submit" value="Wstaw">
    <input type="reset" value="Wyczysc">
    </form>
    KONIEC;

    //echo $_SESSION['error'];

    if ($_SESSION['error'] == 1){
        echo "<h3>Błędne dane</h3>";

    }
    $_SESSION['error'] = 0;

?>


