
<?php

require_once 'connect.php';


    $_GET["keywords"] = htmlspecialchars($_GET["keywords"]); //pour sécuriser le formulaire contre les failles html
    $keywords = $_GET["keywords"];
    $keywords = trim($keywords); //pour supprimer les espaces dans la requête de l'internaute
    $keywords = strip_tags($keywords); //pour supprimer les balises html dans la requête

    if (isset($keywords)) {
        $keywords = strtolower($keywords);
        $select_keywords = $bdd->prepare("SELECT nom FROM compagnie_aerienne WHERE nom LIKE ?");
        $select_keywords->setFetchMode(PDO::FETCH_ASSOC);
        $select_keywords->execute(array("%" . $keywords . "%"));
        $tab = $select_keywords->fetchAll();
    } else {
        $message = "You must enter your query in the search bar";
    }


?>