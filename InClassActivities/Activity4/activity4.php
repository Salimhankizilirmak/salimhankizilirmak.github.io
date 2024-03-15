<!DOCTYPE html>
<html lang="en">
<head>
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1" />
</head>
<body>

<form action="activity4.php" method="GET">
    <table>
        <tr>
            <td>From:</td>
            <td>
                <input type="text" name="fromValue" value="<?php echo isset($_GET['fromValue']) ? $_GET['fromValue'] : ''; ?>"/>
            </td>
            <td>Currency:</td>
            <td>
                <select name="fromCurrency">
                    <?php foreach (['USD', 'CAD', 'EUR'] as $currency): ?>
                        <option value="F<?= $currency ?>" <?= isset($_GET['fromCurrency']) && $_GET['fromCurrency'] === "F$currency" ? 'selected' : '' ?>><?= $currency ?></option>
                    <?php endforeach; ?>
                </select>
            </td>
        </tr>
        <tr>
            <td>To:</td>
            <td>
                <input type="text" name="toValue" value="<?php echo isset($_GET['toValue']) ? $_GET['toValue'] : ''; ?>"/>
            </td>
            <td>Currency:</td>
            <td>
                <select name="toCurrency">
                    <?php foreach (['USD', 'CAD', 'EUR'] as $currency): ?>
                        <option value="T<?= $currency ?>" <?= isset($_GET['toCurrency']) && $_GET['toCurrency'] === "T$currency" ? 'selected' : '' ?>><?= $currency ?></option>
                    <?php endforeach; ?>  
                </select>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="submit" value="convert"/></td>
        </tr>
    </table>
</form>

<?php
if (isset($_GET["fromValue"]) && isset($_GET["toValue"]) && isset($_GET["fromCurrency"]) && isset($_GET["toCurrency"])) {
    $rates = array(
        "FUSD-TCAD" => 1.35,
        "FUSD-TEUR" => 0.91,
        "FCAD-TUSD" => 0.74,
        "FCAD-TEUR" => 0.68,
        "FEUR-TUSD" => 1.09,
        "FEUR-TCAD" => 1.47
    );

    $fromCurrency = $_GET["fromCurrency"];
    $toCurrency = $_GET["toCurrency"];
    $fromValue = floatval($_GET["fromValue"]);

		//to get currencies like fusd-tcad and then we try to reach current exchange rate
    $currencyPair = $fromCurrency . '-' . $toCurrency;

    if (isset($rates[$currencyPair])) {
        $toValue = $fromValue * $rates[$currencyPair];
        echo "<script>document.getElementsByName('toValue')[0].value = '{$toValue}';</script>";
    } else {
        echo "You are converting between the same currencies!!";
    }
}
?>
</body>
</html>
