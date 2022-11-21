function checkPassword(password, buttonId = null) {
  var points = 0;

  const regexMaj = /[A-Z]/g;
  const regexMin = /[a-z]/g;
  const regexChiffre = /[0-9]/g;
  const regexChar = /[^a-zA-Z0-9]/g;

  var lenghtValide = 0;
  var majValide = 0;
  var minValide = 0;
  var chiffreValide = 0;
  var charValide = 0;

  // Taille superieur à 12
  if (password.length >= 12) {
    points += 3;
    lenghtValide = 1;
  } else {
    if (lenghtValide == 1) {
      points -= 3;
      lenghtValide = 0;
    }
  }

  // Au moins 1 majuscule
  if (regexMaj.test(password)) {
    points += 1;
    majValide = 1;
  } else {
    if (majValide == 1) {
      points -= 1;
      majValide = 0;
    }
  }

  // Au moins 1 minuscule
  if (regexMin.test(password)) {
    points += 1;
    minValide = 1;
  } else {
    if (minValide == 1) {
      points -= 1;
      minValide = 0;
    }
  }

  // Au moins 1 chiffre
  if (regexChiffre.test(password)) {
    points += 1;
    chiffreValide = 1;
  } else {
    if (chiffreValide == 1) {
      points -= 1;
      chiffreValide = 0;
    }
  }

  // Au moins 1 caractère spéciale
  if (regexChar.test(password)) {
    points += 1;
    charValide = 1;
  } else {
    if (charValide == 1) {
      points -= 1;
      charValide = 0;
    }
  }
  //Si on a renseigné un id pour le bouton on le désactive si le password n'est pas valide et on l'active si il est valide
  if (buttonId !== null) {
    if (points >= 7) {
      $("#" + buttonId).prop("disabled", false);
    } else {
      $("#" + buttonId).prop("disabled", true);
    }
  }
  //Sinon on retourne true si il est valide ou false si il n'est pas valide
  else {
    if (points >= 7) {
        return true;
    } else {
        return points;
    }
  }
}
