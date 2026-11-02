let formulaire = document.querySelector("#formulaire");

let inputNom = document.querySelector("#nom");
let inputAge = document.querySelector("#age");
let inputLangage = document.querySelector("#langage");

let affichenom = document.querySelector("#affichenom");
let afficheage = document.querySelector("#afficheage");
let affichelangage = document.querySelector("#affichelangage");

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();

    let nomSaisi = inputNom.value;
    let ageSaisi = inputAge.value;
    let langage = inputLangage.value;

    affichenom.textContent = `Bonjour ${nomSaisi} !`;
    afficheage.textContent = `Vous avez ${ageSaisi} ans.`;
    affichelangage.textContent = `Votre langage préféré est ${langage}.`;
});