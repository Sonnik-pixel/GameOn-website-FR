function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.getElementById("close");
const formData = document.querySelectorAll(".formData");

// INPUT
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

// launch modal event
modalBtn.forEach((btn) => {
  btn.addEventListener("click", launchModal);
  console.log(btn);
});

//close modal event
// ajouter un écouteur sur la croix
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.classList.add("modal-show");
}

//close modal form
// lui dire dinjecter un style none
// mais mauvaise technique, il faut créer une classe en display none
// et lui dire de faire jouer cette classe

function closeModal() {
  modalbg.classList.remove("modal-show");
}

// CHECK

// input first and last
// Le champ Prénom / Nom a un minimum de 2 caractères / n'est pas vide.
function check(prenom, nom) {
  if (first.length < 2) {
    return false;
  } else if (first.length == 0) {
    return false;
  } else {
    return true;
  }
}

// input last
// Le champ nom a un minimum de 2 caractères / n'est pas vide.
// function checkLast() {
//   if(last.length < 2) {
//   return false;
//   }
//   else if(first.length == 0) {
//     return false;
//   }
//  else {
//  return true;
//  }
// }

function myFunction(test) {
  console.log(document.getElementById("first"));
  console.dir(document.getElementById("first"));
  console.log(document.getElementById("first").value.length);
  console.log(test.value.length);
}
