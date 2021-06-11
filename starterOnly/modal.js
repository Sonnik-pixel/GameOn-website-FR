function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// const regex
const regexMail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementById("close");

// 1) Je récupère les messages d'erreur pour ensuite les afficher via un ID unique dans ma SPAN :
const errorDisplayPrenom = document.getElementById("error-display-prenom");
const errorDisplayNom = document.getElementById("error-display-nom");
const errorDisplayMail = document.getElementById("error-display-mail");

// INPUT
// 1) Première chose, il faut récupérer l'élement concerné (input) via un ID unique dans mon INPUT :
const firstName = document.getElementById("first");
console.log("c'est mon firstName", firstName);
console.dir(firstName);
const lastName = document.getElementById("last");
console.dir(lastName);
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

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
  firstName.addEventListener("input", checkFunctionPrenom);
  lastName.addEventListener("input", checkFunctionNom);
  email.addEventListener("input", checkFunctionEmail);
}

// 3) création de la function qui permettra de vérifier le nombre de caractères pour prénom :
function checkFunctionPrenom() {
  // Je fais un console.log pour voir si mon étape 2 fonctionne bien
  console.log("je tape actuellement dans l'input du prénom");
  // Je veux vérifier SI il y a deux lettres minimun ou égal dans mon input SINON je retourne une erreur
  if (firstName.value.length >= 2) {
    console.log("valide");
    errorDisplayPrenom.classList.remove("show");
  } else if (firstName.value.length === 0) {
    errorDisplayPrenom.classList.remove("show");
  } else {
    console.log("attention il manque des lettres");
    errorDisplayPrenom.classList.add("show");
  }
}

// création de la function qui permettra de vérifier le nombre de caractères pour nom :
function checkFunctionNom() {
  // Je fais un console.log pour voir si mon étape 2 fonctionne bien
  console.log("je tape actuellement dans l'input du nom");
  // SI la taille de la valeur de mon nom est supérieur ou égal à 2 j'enlève la classe show qui me permet de monter mon message d'erreur.
  if (lastName.value.length >= 2) {
    console.log("valide");
    errorDisplayNom.classList.remove("show");
    // SINON SI la taille de la valeur de mon nom est strictement égal à 0 j'enlève la classe show qui me permet de montrer mon message d'erreur.
  } else if (lastName.value.length === 0) {
    errorDisplayNom.classList.remove("show");
    // SINON tout le reste des autres cas de situation possible et inimaginable pouvaient se produire, dans ce cas là j'ajoute la classe show qui me permet d'afficher mon message d'erreur.
  } else {
    console.log("attention il manque des lettres");
    errorDisplayNom.classList.add("show");
  }
}

//création de la function qui permettra de vérifier les paramètres de saisi pour le champ mail :
function checkFunctionEmail() {
  if (email.value.match(regexMail)) {
    errorDisplayMail.classList.remove("show");
  } else if (email.value.length === 0) {
    errorDisplayMail.classList.remove("show");
  } else {
    errorDisplayMail.classList.add("show");
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
