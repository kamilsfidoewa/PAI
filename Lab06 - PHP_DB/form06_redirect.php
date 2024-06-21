<?php
    session_start();
    $link = mysqli_connect("localhost", "scott", "tiger", "instytut");

    if (isset($_POST['id_prac']) &&
            is_numeric($_POST['id_prac']) &&
            is_string($_POST['nazwisko']))
        {
            $sql = "INSERT INTO pracownicy(id_prac,nazwisko) VALUES(?,?)";
            $stmt = $link->prepare($sql);
            $stmt->bind_param("is", $_POST['id_prac'], $_POST['nazwisko']);
            $result = $stmt->execute();
            if (!$result) {
                // $_SESSION['error'] = "Query failed: " . mysqli_error($link);
                // $stmt->close();
                // header("Location: form06_post.php");
                // exit();
                printf("Query failed: %s\n", mysqli_error($link));
                header("Location:form06_post.php");
            } 
            // $_SESSION['error'] = 0;
            $stmt->close();
            header("Location: form06_get.php");
            exit();
        } 

    else {
        $_SESSION['error'] = 1;
        header("Location: form06_post.php");
    }

?>