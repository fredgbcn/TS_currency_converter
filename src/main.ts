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

const deviseInitiale = document.querySelector("#devise-initiale")! as HTMLSelectElement;
deviseInitiale.innerHTML = generateOption(devises)

const deviseFinale = document.querySelector("#devise-finale")! as HTMLSelectElement;
deviseFinale.innerHTML = generateOption(devises)

function generateOption(in_devises:DeviseType[]) : string{
    let listeDeviseTxt = ""
    for(let d of in_devises){
        listeDeviseTxt += `<option value=\"${d.code}\">${d.nom} - ${d.symbole}</option>`
    }
    return listeDeviseTxt;
}
//Récupérer Montant + Devises choisis
let montant:number = 0;
let montantInput = document.querySelector("#montant")! as HTMLInputElement;

montantInput.addEventListener("keyup", () => {
    montant = +montantInput.value
    displayResult()
})

let valeurDeviseInitiale = deviseInitiale.value
deviseInitiale.addEventListener("change", () =>{
    valeurDeviseInitiale = deviseInitiale.value

    displayResult()
})
let valeurDeviseFinale = deviseFinale.value
deviseFinale.addEventListener("change", () =>{
    valeurDeviseFinale = deviseFinale.value
    displayResult()
})

//Calcul du résultat

let resultDom = document.getElementById("Resultat")! as HTMLDivElement;

 function displayResult(){
    resultDom.innerHTML = "Resultat : " +  calculResult(montant, valeurDeviseInitiale, valeurDeviseFinale);
 }
 function calculResult(in_montant:number, in_deviseInit:string, in_deviseFinale:string) : number{
    let deviseInitObjet = getDevise(in_deviseInit, devises);
    let deviseFinaleObjet = getDevise(in_deviseFinale, devises);

    let deviseInit:DeviseType;
    if(deviseInitObjet) deviseInit = deviseInitObjet as DeviseType;
       else throw {message : "la devise initiale n'est pa correcte"}

    let deviseFinale:DeviseType;
    if(deviseFinaleObjet) deviseFinale = deviseFinaleObjet as DeviseType;
        else throw {message : "la devise initiale n'est pa correcte"}
    console.log(deviseInit.rate)
    return (montant * deviseInit.rate) / deviseFinale.rate;
 }
 function getDevise(codeDevise:string, in_devises : DeviseType[]) : DeviseType | null{
     for(let devise of in_devises){
         if(codeDevise === devise.code){
             return devise
         }
     }
    return null;
 }

