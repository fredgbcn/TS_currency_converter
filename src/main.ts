type DeviseType = {
    nom : string;
    code: string;
    symbole: string;
    rate: number;
}

const dollar:DeviseType = {
    nom : "Dollar",
    code: "Dol",
    symbole:"$",
    rate: 1
}
const euro:DeviseType = {
    nom : "Euro",
    code: "Eur",
    symbole:"€",
    rate: 1.2
}
const livre:DeviseType = {
    nom : "Livre",
    code: "Liv",
    symbole:"£",
    rate: 1.39
}

const yuan:DeviseType = {
    nom : "Yuan",
    code: "Yua",
    symbole:"&yen;",
    rate: 0.15
}
const devises:DeviseType[] = [dollar, euro, livre, yuan]
const deviseInitiale = document.getElementById("devise-initiale")! as HTMLSelectElement;
deviseInitiale.innerHTML = generateOption(devises)

const deviseFinale = document.getElementById("devise-finale")! as HTMLSelectElement;
deviseFinale.innerHTML = generateOption(devises)

function generateOption(in_devises:DeviseType[]) : string{
    let listeDeviseTxt = ""
    for(let d of in_devises){
        listeDeviseTxt += `<option value=\"${d.code}\">${d.nom} - ${d.symbole}</option>`
    }
    return listeDeviseTxt;
}
const montant = document.getElementById("montant")! as HTMLInputElement;

function afficherMontant(){
 let value = montant.value
    console.log(value)
}
montant.addEventListener("input", afficherMontant)
