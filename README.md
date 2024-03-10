<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>30 Day Habit Tracker</title>
<style>
    body {
        font-family: Arial, sans-serif;
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }
    .day-checkbox {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: 5px;
    }
</style>
</head>
<body>
    <h1>30 Day Habit Tracker</h1>
    <div class="grid-container">
        <!-- Generate 30 checkboxes -->
        <?php
            for ($day = 1; $day <= 30; $day++) {
                echo '<label><input type="checkbox" class="day-checkbox" id="day-' . $day . '"> Day ' . $day . '</label>';
            }
        ?>
    </div>
</body>
</html>
