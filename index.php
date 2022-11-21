<?php

// On démarre la session
session_start();

?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- jQuery -->
    <script src="plugin/jQuery/jquery-3.6.0.min.js"></script>

    <!-- CKEditor -->
    <script type="text/javascript" src="plugin/ckeditor/build/ckeditor.js"></script>

    <!-- Scripts -->
    <script type="text/javascript" src="js/checkPassword.js"></script>
    <script type="text/javascript" src="js/load.js"></script>
    <script type="text/javascript" src="js/modal.js"></script>
    <script type="text/javascript" src="js/responsiveNavbar.js"></script>
    <script type="text/javascript" src="js/chatBot.js"></script>

    <!-- FontAwesome -->
    <link href="assets/fontawesome/css/all.min.css" rel="stylesheet">

    <!-- FRAMEWORK -->
    <link rel="stylesheet" type="text/css" href="plugin/bulma/css/bulma.css">

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/chatbot.css">
    <link rel="stylesheet" type="text/css" href="assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font.css">
    <link rel="stylesheet" type="text/css" href="assets/css/general.css">
    <link rel="stylesheet" type="text/css" href="assets/css/home.css">
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
    <link rel="stylesheet" type="text/css" href="assets/css/modal.css">
    <link rel="stylesheet" type="text/css" href="assets/css/navbar.css">

    <title>The Great Wheel</title>
</head>
<?php
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = "home";
}
?>

<body>
    <?php
    if ($page !== "main") {
    ?>
        <div id="navbar"></div>
        <script>
            // Chargement du controlleur de la page demandée
            loadView("navbar");
        </script>
    <?php
    }
    ?>
    <div id="controller"></div>
    <!-- Chat bot -->
    <div id="chat-circle" class="btn btn-raised">
        <div id="chat-overlay"></div>
        <i class="fa-solid fa-robot fa-lg"></i>
    </div>

    <div class="chat-box">
        <div class="chat-box-header">
            ChatBot
            <span class="chat-box-toggle"><i class="material-icons">close</i></span>
        </div>
        <div class="chat-box-body">
            <div class="chat-box-overlay">
            </div>
            <div class="chat-logs">

            </div>
            <!--chat-log -->
        </div>
        <div class="chat-input">
            <form>
                <input type="text" id="chat-input" placeholder="Send a message..." />
                <button type="submit" class="chat-submit" id="chat-submit"><i class="material-icons">send</i></button>
            </form>
        </div>
    </div>
    <script>
        // Chargement du controlleur de la page demandée
        loadController("<?php echo $page ?>");
    </script>
    <!-- Les events -->
    <?php

    if (isset($_GET['event'])) {
        $event = $_GET['event'];

        if ($event == 'logout') {
            session_destroy();
            header('Location: .');
        }
    }
    ?>
</body>

</html>