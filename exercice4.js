let produit = prompt("Entrez le nom du produit");
let prixUnitaire = Number(prompt("Entrez le prix unitaire en TND"));
let quantite = Number(prompt("Entrez la quantite commandee"));

let total = prixUnitaire * quantite;
let pourcentageRemise = 0;

if(total < 100){
    pourcentageRemise = 0;
}else if(total < 200){
    pourcentageRemise = 10;
}else{
    pourcentageRemise = 20;
}

let montantRemise = total * pourcentageRemise / 100;
let prixFinal = total - montantRemise;

// Frais de livraison
let livraison = 0;

if(prixFinal < 150){
    livraison = 7;
}else{
    livraison = 0;
}

let totalAvecLivraison = prixFinal + livraison;

console.log("Produit : " + produit);
console.log("Prix unitaire : " + prixUnitaire + " TND");
console.log("Quantite : " + quantite);
console.log("Total avant remise : " + total + " TND");
console.log("Remise appliquee : " + pourcentageRemise + " %");
console.log("Montant de la remise : " + montantRemise + " TND");
console.log("Total a payer : " + prixFinal + " TND");
console.log("Frais de livraison : " + livraison + " TND");
console.log("Total livraison comprise : " + totalAvecLivraison + " TND");
