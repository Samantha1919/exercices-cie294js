// fenetre = pop up

 let nom = "";

function definirNom () {
    nom = prompt("Entrez votre nom"); // dcp ca recup ce que luser ecrit et ca le met dans la variable nom
}

function afficherNom() {
    document.getElementById("pé").innerHTML = nom;

}

function decalerNon() {
    let nonBtn = document.getElementById("non");
    nonBtn.style.color = "red";
    margin = `${Math.floor(Math.random() * 50) + 1}%`;
    console.log(margin);
    nonBtn.style.marginLeft =  margin;
   
    // non while() tu cliques sur le bouton tu continues a le deplacer vers la droite
}

function messageFelicitations () {
    alert("Tant mieux pour vous");
}