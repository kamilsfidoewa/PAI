<?php
    $link = mysqli_connect("localhost", "scott", "tiger", "instytut");
    
    if (!$link) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    echo "<a href='form06_post.php'>Wstaw nowego pracownika</a><br>";
    $sql = "SELECT * FROM pracownicy";
    $result = $link->query($sql);
    
    foreach ($result as $v) {
        echo $v["ID_PRAC"]." ".$v["NAZWISKO"]."<br/>";
    }
    
    $result->free();
    $link->close();

    
?>

