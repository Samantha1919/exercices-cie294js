
let reponse = 0;

do  {
    let chiffreUn = "";
chiffreUn = parseInt(prompt("Entrez un chiffre"));
let chiffreDeux = "";
chiffreDeux = parseInt(prompt("Entrez un second chiffre"));

 if (chiffreUn == chiffreDeux) {
     alert ("Les deux chiffres sont égaux");
 }

 else if ( chiffreUn > chiffreDeux) {
     alert ("Le premier chiffre est plus grand que le second");

 } else {
     alert("Le second chiffre est lus grand que le premier");
 }

 reponse = confirm("Voulez vous recommencer ? ");
 console.log(reponse)

} while (reponse) 

    window.close();





