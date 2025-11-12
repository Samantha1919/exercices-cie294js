class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let episodes = [
  new Episode("Dark Beginnings", 45, true),
  new Episode("The Mystery Continues", 45, false),
  new Episode("An Unexpected Climax", 60, false),
];

// Add logic here
// ======================
/*
for (let episode of episodes){ // on a cree le variable vu qeuellee existaoit pas avant-> un peu comme un foreach dcp la plus facile
  episode.hasBeenWatched = false;

} */

/*
for (let i in episodes) { // moyenne
  
  episodes[i].hasBeenWatched = false; // tu parcours le tbleau episodes et tu mets hbw a false pr tt les episodes
}
*/

for (let i = 0; i < episodes.length; i++) { // la plus dure .length psq si tas 400 ep tu vas pas les compter a la main
  episodes[i].hasBeenWatched = false;
}





// ======================

const body = document.querySelector("body");

for (let episode of episodes) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("series-frame");
  let newTitle = document.createElement("h2");
  newTitle.innerText = "The Story of Tau";
  let newParagraph = document.createElement("p");
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.hasBeenWatched ? "Already been watched" : "Not yet watched"}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}
