<!DOCTYPE html>
<html lang="en">
    <?php //MySQL connection
        $db_host = "localhost";
        $db_id = "root";
        $db_pass = "root";
        $db_used = "creatures";

        $db = new mysqli($db_host, $db_id, $db_pass, $db_used);
        if (mysqli_connect_error()) {
            echo "Error! Could not connect to the database." 
            . $db->connect_error . $db->connect_errno;
        }
    ?>
    <head>
        <meta charset="UTF-8">
        <title>Accueil Small Web App</title>
    </head>
    <body>
    <?php
        $records = mysqli_query($db, "SELECT creatureId FROM creature");
        while($date = mysql_fetch_array($records)) {
            echo "Creature n°" . $data['creatureId'];
        }
    ?>
    </body>
</html>