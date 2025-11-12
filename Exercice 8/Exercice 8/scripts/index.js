//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'année
const anneeInput = document.getElementById("annee");

let params = []; // enft les premiers chiffres du tableau cets lordre et apres les : c leur valeur 
for (let i = 20; i > 0; i--) { // si on metait 12 on mettrrait lelement 0 dans les params on fers params[0]
  params.push(i);
}

//On défini la variable année
let annee;

function onConvert() {
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  annee = parseInt(anneeInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(annee)) {
    alert("Ceci n'est pas un nombre");
    return;
  }
  const mois = annee * params[8]; // dcp ca c juste ex mois = 2 * 12 dcp on prend le 8eme element du tableau et dcp il est egal a 12 et on fait mois est egal a lanne * 12
  console.log(mois);

  // ANALYSER ICI AVEC CONSOLE LOG
  // Analyser la variable annee
  console.log(annee); // juste
  // Analyser la variable params
  console.log(params); // va jsuqua 20 dans des chiffres 
  // Analyser la variable mois
  console.log(mois); // met 8 mois dans 1 anne dcp c faux
  // FIN ANALYSE

  espaceMessage.innerHTML = annee + " années font " + mois + "mois ";
}

//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton.addEventListener("click", onConvert);
