let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// fetch data from API
let getMovie = () => {
  let movieName = movieNameRef.value.trim();
  let url = `https://www.omdbapi.com/?t=${encodeURIComponent(
    movieName
  )}&apikey=${key}`;
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter a Movie Name</h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="info">
           <img src=${data.Poster} class="poster">

           <div>
               <h2>${data.Title}</h2>
           </div>
        </div>
        
        `;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
};

window.addEventListener("load", getMovie);
