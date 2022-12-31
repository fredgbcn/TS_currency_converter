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
const deviseInitiale = document.getElementById("devise-initiale");
deviseInitiale.innerHTML = generateOption(devises);
const deviseFinale = document.getElementById("devise-finale");
deviseFinale.innerHTML = generateOption(devises);
function generateOption(in_devises) {
    let listeDeviseTxt = "";
    for (let d of in_devises) {
        listeDeviseTxt += `<option value=\"${d.code}\">${d.nom} - ${d.symbole}</option>`;
    }
    return listeDeviseTxt;
}
const montant = document.getElementById("montant");
function afficherMontant() {
    let value = montant.value;
    console.log(value);
}
montant.addEventListener("input", afficherMontant);
//# sourceMappingURL=main.js.map