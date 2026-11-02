let correctPin = "1234";
let balance = 500;

let pin = prompt("Saisir votre code PIN");

if(pin === correctPin){
    let montant = Number(prompt("Entrez le montant du retrait"));

    if(!(montant > 0)){
        console.log("Erreur : le montant doit etre strictement positif.");
    }else if(montant % 10 !== 0){
        console.log("Erreur : le montant doit etre un multiple de 10 TND.");
    }else if(montant > balance){
        console.log("Erreur : solde insuffisant.");
        console.log("Solde disponible : " + balance + " TND");
    }else{
        balance = balance - montant;

        console.log("Retrait effectue avec succes !");
        console.log("Montant retire : " + montant + " TND");
        console.log("Nouveau solde : " + balance + " TND");
    }
}else{
    console.log("Erreur : code PIN incorrect.");
    console.log("Operation refusee.");
}
