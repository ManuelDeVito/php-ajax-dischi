<?php include '../dischi.php' ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi PHP</title>
        <link rel="stylesheet" href="../dist/app.css">
    </head>
    <body>
        <div id="wrapper">
            <header>
                <h1>Dischi php</h1>
            </header>
            <main>
                <div class="contenitore">
                    <div class="contenitore-card">
                        <?php foreach ($dischi as $valore_singolo) { ?>
                            <div class="card">
                                <img src="
                                <?php echo $valore_singolo['poster'] ?>" alt="">
                                <h6>
                                    <?php echo $valore_singolo['title'] ?>
                                </h6>
                                <p>
                                    <?php echo $valore_singolo['author'] ?>
                                </p>
                                <em>
                                    <?php echo $valore_singolo['genre'] ?>
                                </em>
                                <small>
                                    <?php echo $valore_singolo['year'] ?>
                                </small>
                            </div>
                        <?php
                        } ?>
                    </div>
                </div>
            </main>
        </div>
    </body>
</html>
