<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root">
    <?php 
      $root = explode(':',$_SERVER['HTTP_HOST']);
    ?>
    <a href="http://<?php echo $root[0]?>:3000" style="display:inline-flex;padding:8px 16px; background:#00000020;color:#000;text-decoration:none;">Parte React puerto:3000</a>
    <?php
      phpinfo();
    ?>
  </div>
</body>
</html>