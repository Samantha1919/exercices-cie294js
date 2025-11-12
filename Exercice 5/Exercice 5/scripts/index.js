// Modify the code here
// ======================

/*
1. Au bon endroit dans la déclaration de fonction, choisissez un nom pour le paramètre de votre
fonction. N'oubliez pas, ce sera un tableau de nombres.
2. Pour calculer une moyenne, on ajoute toutes les valeurs ensemble, puis on divise par le
nombre de valeurs.
3. Créez une variable qui stockera la somme de tous les nombres du tableau. Initialisez-la avec
la valeur zéro.
4. Sachant que le paramètre reçu est un tableau de nombres, utilisez une boucle for pour ajouter
chaque nombre du tableau à votre variable somme.
5. Créez une constante qui contient le résultat de la somme finale divisée par le nombre de
valeurs dans le tableau reçu en argument.
6. Faites en sorte que la fonction retourne le résultat fina
*/



const calculateAverageRating =(notes)  =>{
  let sommeValeurs = 0;
  let nombreValeurs = 0; // on peut aussi mettre notes.length
 
  for (let note of notes) {
    sommeValeurs = sommeValeurs + note;
    nombreValeurs++ ; 
   
  }

   let moyenne = sommeValeurs/nombreValeurs;

   return moyenne;

  

}

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector("#tau-score").innerText =
    tauAverage.toFixed(1) + " stars";
  document.querySelector("#colin-score").innerText =
    colinAverage.toFixed(1) + " stars";
  document.querySelector("#clara-score").innerText = `${
    calculateAverageRating([]) === 0
      ? "No ratings"
      : calculateAverageRating([]) + " stars"
  }`;
}
