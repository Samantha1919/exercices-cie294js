// Create Object here
// =========================================
let episode = {
    title : "Episode 1",
    duration: 30,
    hasBeenWatched: false
};
// =========================================

console.log(episode.title);

document.querySelector("#episode-info").innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
