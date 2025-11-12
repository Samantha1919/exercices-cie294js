class Show {
  constructor(title, numberOfSeasons, episodesPerSeason) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show("The Story of Tau", 5, 12);
const meldrum = new Show("The Hero of Old Meldrum", 3, 6);
const clara = new Show("The Bugs of Isla Clara", 6, 15);

const shows = [tau, meldrum, clara];

// Modify the following code
// ======================
/*
Voici un exercice où vous devrez trouver où le code nécessite une factorisation, et comment le faire.
Le code mis à disposition importe des séries depuis la base de données, en génère les informations
pour les composants du site, et les met dans un tableau à exporter.
Cependant, pour l'instant, le même code est répété pour chaque série. L'endroit parfait pour une
fonction !
Créez une fonction qui vous permet de refactoriser ce code, afin de le raccourcir et de le rendre plus
lisible.
Appelez votre nouvelle fonction pour chaque série pour créer le composant correspondant, en
passant les arguments appropriés

*/

/*
const tauTitleText = tau.title;
const tauSeasonsText = tau.numberOfSeasons + " seasons";
const tauEpisodesText = tau.episodesPerSeason + " episodes per season";
const tauComponent = {
  titleText: tauTitleText,
  seasonsText: tauSeasonsText,
  episodesText: tauEpisodesText,
};

const meldrumTitleText = meldrum.title;
const meldrumSeasonsText = meldrum.numberOfSeasons + " seasons";
const meldrumEpisodesText = meldrum.episodesPerSeason + " episodes per season";
const meldrumComponent = {
  titleText: meldrumTitleText,
  seasonsText: meldrumSeasonsText,
  episodesText: meldrumEpisodesText,
};

const claraTitleText = clara.title;
const claraSeasonsText = clara.numberOfSeasons + " seasons";
const claraEpisodesText = clara.episodesPerSeason + " episodes per season";
const claraComponent = {
  titleText: claraTitleText,
  seasonsText: claraSeasonsText,
  episodesText: claraEpisodesText,
};

*/

/*
function showComponents () {
  for (let show = 0; show++) {
    return this.title, this.numberOfSeasons, episodesText;
  }
}
  */

function showComponents () {
  for (let i = 0; i < shows.legnth; i++) {
    const show = shows[i];
    console.log(`${show.title} titre` `${show.numberOfSeasons} saisons` `${show.episodesPerSeason} episodes par saison`);
  }
}

showComponents();

//const showComponents = [tauComponent, meldrumComponent, claraComponent];

// ======================
// Modify the code above

const body = document.querySelector("body");

const updateShows = () => {
  for (let show of showComponents) {
    const showPane = document.createElement("div");
    showPane.classList.add("series-frame");
    const showHeading = document.createElement("h2");
    showHeading.innerText = show.titleText;
    const showDetails = document.createElement("p");
    const seasons = document.createElement("p");
    seasons.innerText = show.seasonsText;
    const episodes = document.createElement("p");
    episodes.innerText = show.episodesText;
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();
