//Ouvre la modalbox avec l'id de la div en paramètre (nomer la modal de la façon suivante modalLogin ou modalUser)
function openModal(id) {
  var modal = document.getElementById(id);
  //On ajoute la classe is-flex pour centrer la modalbox
  modal.classList.add("is-flex");
  //Display block pour afficher
  modal.style.display = "block";
}

//Ferme la modalbox avec l'id de la div en paramètre
function closeModal(id) {
  var modal = document.getElementById(id);
  //On retire la classe is-flex pour que la modal box ne reste pas affichée
  modal.classList.remove("is-flex");
  //Display none pour ne plus afficher
  modal.style.display = "none";
}
