<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RegistrationForm</title>
</head>
<body>
    <h1>Preview</h1>
    <?php
        if( $_POST['name'] == null)
        {
            echo "You did not enter name!! <br>";
        }
        else
        {
            echo $_POST['name']."<br>";
        }
        if( $_POST['username'] == null)
        {
            echo "You did not enter username! <br>";
        }
        else
        {
            echo $_POST['username']."<br>";
        }
        if( $_POST['password'] == null)
        {
            echo "You did not enter password!! <br>";
        }
        else
        {
            echo $_POST['password']."<br>";
        }
        if( $_POST['address'] == null)
        {
            echo "You did not enter address!! <br>";
        }
        else
        {
            echo $_POST['address']."<br>";
        }
        if( $_POST['countries'] == "none" )
        {
            echo "You did not select address!!<br>";
        }

        else
        {
            echo $_POST['countries']."<br>";
        }
        if($_POST['zip'] == null)
        {
            echo "You did not enter zipCode!!<br>";
        }
        else
        {
            echo $_POST['zip']."<br>";
        }
        if($_POST['email'] == null)
        {
            echo "You did not enter email!!<br>";
        }
        else
        {
            echo $_POST['email']."<br>";
        }
        if(empty($_POST['sex']))
        {
            echo "You did not select gender!! <br>";
        }
        else
        {
            echo $_POST['sex']."<br>";
        }
        if(empty($_POST['languages']))
        {
            echo "You did not select language!! <br>";
        }
        else
        {
            foreach($_POST['languages'] as $item)
            {
                echo $item . " ";
            }
            echo "<br>";
        }
        if($_POST['about'] == null)
        {
            echo "You did not enter about section!!<br>";
        }
        else
        {
            echo $_POST['about']."<br>";
        }
    ?>
</body>
</html>
