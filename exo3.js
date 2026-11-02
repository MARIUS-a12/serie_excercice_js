let nomEtud = prompt("entrez votre nom ");
let note = Number(prompt("Entrez votre sur 20"));

if(note < 10){
    console.log("Etudiant:", nomEtud);
    console.log("note:", note,"/20");
    console.log("resultat: Echec");

} else if(note >= 10 && note <= 12 ) {
    console.log("Etudiant:",nomEtud);
    console.log("note:", note,"/20");
    console.log("resultat: Passage");
}else if (note >= 12 && note <= 14) {
    console.log("Etudiant:", nomEtud);
    console.log("note:", note,"/20");
    console.log("resultat: Assz bien");
}else if(note >= 14 && note <= 16){
    console.log("Etudiant:", nomEtud);
    console.log("note:", note,"/20");
    console.log("resultat: Bien");
}else if(note >= 16 && note <= 20) {
     console.log("Etudiant:", nomEtud);
    console.log("note:", note,"/20");
    console.log("resultat: Tres bien");
}