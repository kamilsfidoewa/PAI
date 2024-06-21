<?php session_start(); ?>
<?php
    require_once("functions.php");
?>

<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <a href="index.php">Index</a>
        <?php echo "<h1>Zalogowano</h1>"; 

        if((!isSet($_SESSION["zalogowany"]))||($_SESSION["zalogowany"] !== 1)){
            header("Location:index.php");
        }

        echo $_SESSION["zalogowanyImie"];

        if(isSet($_POST["wyloguj"])){
            $_SESSION["zalogowany"] = 0;
            header("Location:index.php");
        }
        ?>

        <div>
            <form action="user.php" method ="POST" enctype = "multipart/form-data">
                <fieldset class="upload">
                    <input type = "file" name ="myfile">
                    <input type = "submit" name = "asd" value ="Wrzuc">
            </form>
        </div>

        <div>
            <form action="user.php" method ="POST">
                <fieldset class="person">
                    <input type = "submit" name ="wyloguj" value="Wyloguj">
            </form>
        </div>
        <h3>Zdjęcie:</h3>
        <?php
            $currentDir = getcwd();
            $uploadDirectory = "/zdjeciaUzytkownikow/";
            if(array_key_exists("myfile", $_FILES)){
                $fileName = $_FILES["myfile"]["name"];
                $fileSize = $_FILES["myfile"]["size"];
                $fileTmpName = $_FILES["myfile"]["tmp_name"];
                $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);
                // $file_Type = $_FILES["myfile"]["type"]; 
                // if ($fileName != "" and 
                //     ($fileType == "image/png" or $fileType == "image/jpeg"
                //     or $fileType == "image/PNG" or $fileType == "image/JPEG")){
                //         $uploadPath = $currentDir.$uploadDirectory.$fileName;
                //         if(move_uploaded_file($fileTmpName, $uploadPath))
                //             echo "Zdjęcie zostało załadowane na serwer FTP";
                // }
      
                if ($fileName != "" and ($fileExt == "jpeg" or $fileExt == "jpg" or $fileExt == "png")){
                    echo "Zdjęcie zostało załadowane na serwer FTP.<br>";
                    echo "<img src = './Photos/$fileName' />";    
                }
                else{
                    echo "TO NIE JEST ZDJĘCIE!!!";
                }
            }
            else{
                echo "Nie przesłano zdjęcia.";
            }
        ?>
    </body>
</html>