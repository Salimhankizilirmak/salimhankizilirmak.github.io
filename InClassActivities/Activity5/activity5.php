<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RegistrationForm</title>

    
</head>
<body>
    <h1>Registration Form</h1>
    
    <form action="activity5-preview.php" method="post">
        
        <label>Name:</label>
        <input type="text" name="name" id="name"><br><br>
        <label>Username:</label>
        <input type="text" name="username" id="username"><br><br>
        <label>Password:</label>
        <input type="password" name="password" id="password"><br><br>
        <label>Address:</label>
        <input type="text" name="address" id="address"><br><br>
        <label>Country:</label>
            <select name="countries" id="countries">
                <option value="none">(Please select a country)</option>
                <option value="Turkey">Turkey</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
            </select> <br><br>
        <label>ZIP Code:</label>
        <input type="text" name="zip" id="zip"><br><br>
        <label>Email:</label>
        <input type="email" name="email" id="email"><br><br>
        <label>Sex:</label>
        <input type="radio" name="sex" id="sex" value="male"> Male
        <input type="radio" name="sex" id="sex" value="female"> Female <br><br>
        <label>Language:</label>
        English <input type="checkbox" name="languages[]" id="language" value="English"> 
        French <input type="checkbox" name="languages[]" id="language" value="French"> 
        German <input type="checkbox" name="languages[]" id="language" value="Germany"> <br><br>

        
        <label>About:</label>
        <textarea name="about" id="about" cols="20" rows="4"></textarea><br><br>

        <input type="submit" id="submit-button" value="submit">
    </form>
</body>
</html>