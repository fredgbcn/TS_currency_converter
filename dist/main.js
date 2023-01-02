"use strict";
const dollar = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    rate: 1
};
const euro = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    rate: 1.2
};
const livre = {
    nom: "Livre",
    code: "Liv",
    symbole: "£",
    rate: 1.39
};
const yuan = {
    nom: "Yuan",
    code: "Yua",
    symbole: "&yen;",
    rate: 0.15
};
const devises = [dollar, euro, livre, yuan];
const deviseInitiale = document.querySelector("#devise-initiale");
deviseInitiale.innerHTML = generateOption(devises);
const deviseFinale = document.querySelector("#devise-finale");
deviseFinale.innerHTML = generateOption(devises);
function generateOption(in_devises) {
    let listeDeviseTxt = "";
    for (let d of in_devises) {
        listeDeviseTxt += `<option value=\"${d.code}\">${d.nom} - ${d.symbole}</option>`;
    }
    return listeDeviseTxt;
}
//Récupérer Montant + Devises choisis
let montant = 0;
let montantInput = document.querySelector("#montant");
montantInput.addEventListener("keyup", () => {
    montant = +montantInput.value;
    displayResult();
});
let valeurDeviseInitiale = deviseInitiale.value;
deviseInitiale.addEventListener("change", () => {
    valeurDeviseInitiale = deviseInitiale.value;
    displayResult();
});
let valeurDeviseFinale = deviseFinale.value;
deviseFinale.addEventListener("change", () => {
    valeurDeviseFinale = deviseFinale.value;
    displayResult();
});
//Calcul du résultat
let resultDom = document.getElementById("Resultat");
function displayResult() {
    resultDom.innerHTML = "Resultat : " + calculResult(montant, valeurDeviseInitiale, valeurDeviseFinale);
}
function calculResult(in_montant, in_deviseInit, in_deviseFinale) {
    let deviseInitObjet = getDevise(in_deviseInit, devises);
    let deviseFinaleObjet = getDevise(in_deviseFinale, devises);
    let deviseInit;
    if (deviseInitObjet)
        deviseInit = deviseInitObjet;
    else
        throw { message: "la devise initiale n'est pa correcte" };
    let deviseFinale;
    if (deviseFinaleObjet)
        deviseFinale = deviseFinaleObjet;
    else
        throw { message: "la devise initiale n'est pa correcte" };
    console.log(deviseInit.rate);
    return (montant * deviseInit.rate) / deviseFinale.rate;
}
function getDevise(codeDevise, in_devises) {
    for (let devise of in_devises) {
        if (codeDevise === devise.code) {
            return devise;
        }
    }
    return null;
}
//# sourceMappingURL=main.js.map