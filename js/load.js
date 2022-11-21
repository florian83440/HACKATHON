// Permet de charger un contrôleur à l'aide jQuery
// Prend en paramètre l'id de la div et le le nom de la vue
function loadController(name) {
    $("#controller").load("controllers/" + name + ".html");
}

// Permet de charger une vue à l'aide jQuery
// Prend en paramètre le nom de la vue qui doit être le même que la div dans laquelle il doit se trouver
function loadView(name) {
    $("#" + name).load("views/" + name + ".html");
}
