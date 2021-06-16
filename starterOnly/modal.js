function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// const regex
const regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexBirthdate = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementById("close");
// const validation = document.getElementById(send-btn);

// 1) Je récupère les messages d'erreur pour ensuite les afficher via un ID unique dans ma SPAN :
const errorDisplayPrenom = document.getElementById("error-display-prenom",);
const errorDisplayNom = document.getElementById("error-display-nom");
const errorDisplayMail = document.getElementById("error-display-mail");
const errorDisplayBirthdate = document.getElementById("error-display-naissance");
const errorDisplayTournois = document.getElementById("error-display-tournois");

// INPUT
// 1) Première chose, il faut récupérer l'élement concerné (input) via un ID unique dans mon INPUT :
const inputFirstName = document.getElementById("first");
// console.log("c'est mon firstName", firstName);
// console.dir(firstName);
const inputLastName = document.getElementById("last");
// console.dir(lastName);
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputTournois = document.getElementById("quantity");

// Initialisation des évents
init();

// FUNCTION

// ajouter mes évènements au démarrage de l'applications, pas obligé de mettre dans une fonction.
function init() {
  // launch modal event
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", launchModal);
  });

  //close modal event
  // ajouter un écouteur sur la croix
  closeBtn.addEventListener("click", closeModal);

  // 2) évent qui permet d'écouter a chaque fois que j'écris une lettre dans l'input, j'écris d'abord ma constante (qui contient et désigne mon INPUT)
  inputFirstName.addEventListener("input", checkFunctionPrenom);
  inputLastName.addEventListener("input", checkFunctionNom);
  inputEmail.addEventListener("input", checkFunctionEmail);
  inputBirthdate.addEventListener("input",checkFunctionBirthdate);
  inputTournois.addEventListener("input", checkFunctionTournois);
  // validation.addEventListener("clic", checkForm);
}

// 3) création de la function qui permettra de vérifier le nombre de caractères pour prénom :
function checkFunctionPrenom() {
  // Je fais un console.log pour voir si mon étape 2 fonctionne bien
  console.log("je tape actuellement dans l'input du prénom");
  // Je veux vérifier SI il y a deux lettres minimun ou égal dans mon input SINON je retourne une erreur
  if (inputFirstName.value.length >= 2) {
    console.log("valide");
    // Si c'est good j'enlève le message d'erreur de ma span ainsi que la bordure rouge
    errorDisplayPrenom.classList.remove("show");
    inputFirstName.classList.remove("border");
  } else if (inputFirstName.value.length === 0) {
    // Sinon si la valeur est égale à 0 pareil
    errorDisplayPrenom.classList.remove("show");
    inputFirstName.classList.remove("border");
  } else {
    console.log("attention il manque des lettres");
    // Sinon j'affiche ma span et mon contour rouge
    errorDisplayPrenom.classList.add("show");
    inputFirstName.classList.add("border");
  }
}

/// création de la function qui permettra de vérifier le nombre de caractères pour nom :
function checkFunctionNom() {
  // Je fais un console.log pour voir si mon étape 2 fonctionne bien
  console.log("je tape actuellement dans l'input du nom");
  // SI la taille de la valeur de mon nom est supérieur ou égal à 2 j'enlève la classe show qui me permet de monter mon message d'erreur.
  if (inputLastName.value.length >= 2) {
    console.log("valide");
    errorDisplayNom.classList.remove("show");
    inputLastName.classList.remove("border");
    // SINON SI la taille de la valeur de mon nom est strictement égal à 0 j'enlève la classe show qui me permet de montrer mon message d'erreur.
  } else if (inputLastName.value.length === 0) {
    errorDisplayNom.classList.remove("show");
    inputLastName.classList.remove("border");
    // SINON tout le reste des autres cas de situation possible et inimaginable pouvaient se produire, dans ce cas là j'ajoute la classe show qui me permet d'afficher mon message d'erreur.
  } else {
    console.log("attention il manque des lettres");
    errorDisplayNom.classList.add("show");
    inputLastName.classList.add("border");
  }
}

//création de la function qui permettra de vérifier les paramètres de saisi pour le champ mail :
function checkFunctionEmail() {
  if (inputEmail.value.match(regexMail)) {
    errorDisplayMail.classList.remove("show");
    inputEmail.classList.remove("border");
  } else if (inputEmail.value.length === 0) {
    errorDisplayMail.classList.remove("show");
    inputEmail.classList.remove("border");
  } else {
    errorDisplayMail.classList.add("show");
    inputEmail.classList.add("border");
  }
}

//création de la function qui permettra de vérifier les paramètres de saisi pour le champ naissance :
function checkFunctionBirthdate() {
  if (inputBirthdate.value.match(regexBirthdate)) {
    errorDisplayBirthdate.classList.remove("show");
    inputBirthdate.classList.remove("border");
  } else {
    errorDisplayBirthdate.classList.add("show");
    inputBirthdate.classList.add("border");
  }
}

//création de la function qui permettra de vérifier les paramètres de saisi pour le champ tournois:
function checkFunctionTournois() {
  if (inputTournois.value <= 99){
    errorDisplayTournois.classList.remove("show");
    return true;
  } else {
    errorDisplayTournois.classList.add("show");
    return false;
  }
}



// création dde la function qui permettra de valider tout le formulaire avant l'envoi :
function checkForm(){
  if (inputFirstName.value = "true" && inputLastName.value = "true") {
    return true;
  } else {
    return false;
  }

}

// launch modal form
// ajout de classe show (visibility: visible;)
function launchModal() {
  modalbg.classList.add("show");
}

//close modal form
// suppression de classe show
function closeModal() {
  modalbg.classList.remove("show");
}

// function myFunction(test) {
//   console.log(document.getElementById("first"));
//   console.dir(document.getElementById("first"));
//   console.log(document.getElementById("first").value.length);
//   console.log(test.value.length);
// }
