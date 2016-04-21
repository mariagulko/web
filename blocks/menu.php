<ul>
    <?php
    $menu_result = $pdo->query("SELECT * FROM  `page`");    
    while ($menu_item = $menu_result->fetch(PDO::FETCH_ASSOC)) {
        if ($menu_item["url"] === parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)) {
            ?>
            <li><a class="active" href="<?php echo $menu_item["url"] ?>"><?php echo $menu_item["name"] ?></a></li>
            <?php } else {
                ?>
            <li><a href="<?php echo $menu_item["url"] ?>"><?php echo $menu_item["name"] ?></a></li>
            <?php
        }
    }
    ?>
</ul>