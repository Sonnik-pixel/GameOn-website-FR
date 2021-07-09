// function qui permet gérer le bouton de navigation en responsive
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
// modalbg cible mon background & ajoute la class show pour le voir et et le retire à la fermeture
const modalbg = document.querySelector(".bground");
// modalBtn cible mes deux boutons "je m'inscris"
const modalBtn = document.querySelectorAll(".modal-btn");
// closeBtn cible mon bouton de fermeture, la croix
const closeBtn = document.getElementById("close");


// CONST Regex
//Ne peut pas contenir de chiffres mais espace et caractères spéciaux + au minimum de deux caractères
const regexText = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexBirthdate = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;

//FORM Elements

//Pour écouter sur un élement dom de ma page il faut le cibler (inputTexte via document.getElementBy)et ensuite appliquer un addEventlistener puis
//choisir l'évenement (click, submit, onkeyup) 1er argument et mettre en deuxième argument une function.

// inputTexte.addEventListener("evenement",maFunction(event));


// function maFunction() {  ma function est équivalente à ça : () => {}
//     alert('coucou');
// }

// Function pour valider le champ texte (séléctionne le champ prénom et nom)
// pour création de nouvelle fonction changer le paramètre (inputMail)
function validerChampTexte(inputTexte) {
    //  console.log(inputTexte);
    // (inputTexte.value.length <= 1 || false == inputTexte.value.match)
    if (!inputTexte.value.match(regexText)) {
        inputTexte.closest('.formField').classList.add("hasError");
        // Autre technique, renvoie le plus proche ancêtre qui n'est pas un input, ma div formfield.
        // console.log(inputTexte.closest(":not(input)"))
        // permet d'arrêter et de sorti de ma function
        return;
    }
    inputTexte.closest('.formField').classList.remove("hasError");
    // console.log(inputTexte.value);
}

// Function pour valider le champ mail
function validerChampMail(inputMail) {
    //  console.log(inputMail);
    if (!inputMail.value.match(regexMail)) {
        inputMail.closest('.formField').classList.add("hasError");
        return;
    }
    inputMail.closest('.formField').classList.remove("hasError");
}

// Function pour valider le champ Anniversaire
function validerChampBirthdate(inputBirthdate) {
    // Récupère la date au format année-mois-jour
    //  console.log(inputBirthdate.value);
    if (!inputBirthdate.value.match(regexBirthdate)) {
        inputBirthdate.closest('.formField').classList.add("hasError");
        return;
    }
    inputBirthdate.closest('.formField').classList.remove("hasError");
}

// Function pour valider le champ Quantity
function validerChampQuantity(inputQuantity) {
    // console.log(inputQuantity.value);
    if (inputQuantity.value < 1 || inputQuantity.value >= 100) {
        inputQuantity.closest('.formField').classList.add("hasError");
        return;
    }
    inputQuantity.closest('.formField').classList.remove("hasError");
}

//   console.log(document.querySelectorAll("input[data-validator=location]:checked").length);
// Function pour valider le champ Location
function validerChampLocation(inputLocation) {
    // inputLocation affiche tous les inputs de toutes les villes <input data-va....>
    // console.log(inputLocation);
    //inputLocation.checked affiche tous les checked si false ou true
    // console.log(inputLocation.checked);
    //inputLocation affiche toutes les valeurs des villes New York San Franciso ....
    //console.log(inputLocation.value);
    const locationChecked = document.querySelectorAll("input[data-validator=location]:checked").length;
    // console.log(locationChecked);
    // taille de ma nodeList
    if (locationChecked === 0) {
        inputLocation.closest('.formField').classList.add("hasError");
        return;
    }
    inputLocation.closest('.formField').classList.remove("hasError");
}

// Function pour valider le champ Checkbox
function validerChampCheckbox(inputCheckbox) {
    // console.log(inputQuantity.value);
    // false est pas coché, ==== strictement égal à false=0 true=1
    if (inputCheckbox.checked === false) {
        // console.log(inputCheckbox.checked);
        inputCheckbox.closest('.formField').classList.add("hasError");
        return;
    }
    inputCheckbox.closest('.formField').classList.remove("hasError");
}

//Function pour valider tous les champs si strictement égal à 0, je remplace mon formulaire par celui de validation.
//La propriété Element.innerHTML de Element récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.
//Permet de remplacer aisément le contenu existant d'un élément par un nouveau contenu donc efface tous les élements enfants (oldForm)
function formIsValid() {
    // console.log(document.querySelectorAll('.formField.hasError'));
    const isValid = document.querySelectorAll('.formField.hasError').length;
    // affiche combien de message d'erreurs sont présents, de base 7.
    // console.log(isValid);
    if (isValid === 0) {
        const form = document.getElementById("formReservation");
        // console.log(form);
        form.innerHTML = `<div class="victory"><h1>Merci ! Votre réservation a été reçue.</h1>
        <div class="wrapper-btn"><button id="btn-close" class="btn-submit">Fermer</button></div></div>`
    }
}

// const validFdorm = document.createElement('div');
// console.log(validFdorm);

//je récupère via l'id unique, mon formulaire FORM et j'ajoute un écouteur (sur submit premier paramètre puis deuxième paramètre, (event) est la paramètre de ma deuxième function)
document.getElementById("formReservation").addEventListener("submit",(event) => {
    console.log(event);
    //permet de couper l'action submit de mon formulaire
    event.preventDefault();

    // Je séléctionne tous les éléments qui ont l'attribut data-validator que je met dans la constante formFields (Nodelist avec tous mes input)
    const formFields = document.querySelectorAll("[data-validator]");
    // console.log(formFields);
    // pour chaque champs du formulaire je récupère mon élement
    formFields.forEach((champFormulaire) => {
        // champformulaire contient tout mes inputs
        // console.log(champFormulaire);
        // je stock la valeur de data-validator (text, email, birthdate, quantity, location, checkbox)
        const validatorType = champFormulaire.dataset.validator;
        // console.log(validatorType);
        // l’instruction switch représente une alternative à l’utilisation d’un if…else if…else.
        switch (validatorType) {
            case 'text':
                validerChampTexte(champFormulaire);
                break;
            case 'email':
                validerChampMail(champFormulaire);
                break;
            case 'birthdate':
                validerChampBirthdate(champFormulaire);
                break;
            case 'quantity':
                validerChampQuantity(champFormulaire);
                break;
            case 'location':
                validerChampLocation(champFormulaire);
                break;
            case 'checkbox':
                validerChampCheckbox(champFormulaire);
                break;
        }
    });
    formIsValid();
    const btnClose = document.getElementById("btn-close");
    btnClose.addEventListener("click",(event) => {
        closeModal();
        // resetModal();
        // Permet de recharger la page, vide le formulaire mais mauvaise pratique
        document.location.reload();
        // pour vider le formulaire je peux aussi faire input.value ="";
    });
});

// Function qui permet de reset le formulaire mais vu que je supprime avant mon innerHTML pas possible
// function resetModal() {
//     document.getElementById("formReservation").reset();
// }

// Initialisation des évents
// Permet d'executer ma function Init, il faut créer une function ok mais ensuite il faut penser à la lancer !
init();

function init() {
    // launch modal event
    modalBtn.forEach((btn) => {
        btn.addEventListener("click",launchModal);
        // constante qui regroupe mes deux boutons je m'inscris, pour chaque boutons j'ajoute un ecouteur au clic et je lance ma function launchmodal.
        // console.log(btn);
    });

    //close modal event
    // ajouter un écouteur sur la croix
    closeBtn.addEventListener("click",closeModal);
}

// display background when modal form is open
// ajout de classe show (visibility: visible;)
function launchModal() {
    modalbg.classList.add("show");
}

// display background when modal form is closed
// suppression de classe show (plus visible)
function closeModal() {
    modalbg.classList.remove("show");
}

