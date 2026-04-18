let movies =[];
function getMovies() { 
 fetch("https://api.tvmaze.com/shows")
  .then(res => res.json()) 
  .then(data => { 
    movies = data; 
    showRandomMovie(); 
});

 }
 function showRandomMovie() {
     let randomIndex = Math.floor(Math.random() * movies.length); 
     let movie = movies[randomIndex];
      document.getElementById("movietitle").textContent = movie.name; 
      document.getElementById("moviedescription").innerHTML = movie.summary; 
      document.getElementById("movieimage").src = movie.image.medium; 
    }
 window.onload = function () {
     getMovies(); }