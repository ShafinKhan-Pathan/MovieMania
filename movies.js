// http://www.omdbapi.com/?apikey=7861bc7c&s=

const userInputMovie = localStorage.getItem("userSearch");
const searchMovieElement = document.querySelector(".search__movie--wrapper");
const searchTitle = document.querySelector(".search__title");

async function main(filter) {
  const movie = await fetch(
    `http://www.omdbapi.com/?apikey=7861bc7c&s=${userInputMovie}`
  );
  const movieData = await movie.json();
  if (filter === "NEWEST_YEAR") {
    movieData.Search.sort((a, b) => {
      return b.Year - a.Year;
    });
  } else if (filter === "OLDEST_YEAR") {
    movieData.Search.sort((a, b) => {
      return a.Year - b.Year;
    });
  }
  console.log(movieData);
  if (movieData.Search) {
    searchTitle.innerHTML = `<h1 class="movie_header-h1">Here are the search results for '${userInputMovie}'</h1>`;
    searchMovieElement.innerHTML = movieData.Search.map((element) =>
      searchMovieHTML(element)
    ).join("");
  } else {
    searchTitle.innerHTML = `<h1 class="movie_header--h1-error">No movies found for the search results '${userInputMovie}'</h1>`;
  }
}

function showMovieDetails(id){
  window.location.href = `${window.location.origin}/movie_details.html`
  localStorage.setItem("id", id)
}
function searchMovieHTML(element) {
  return `
      <div class="search__movie" onclick="showMovieDetails('${element.imdbID}')">
        <figure class="search__figure--image">
          <img class="search__movie--image" src="${element.Poster}" alt="">
        </figure>
        <h3 class="search__movie__title"><span class="unique__modifier">Title - </span>${element.Title}</h3>
              <h4><span class="unique__modifier">Year - </span>${element.Year}</h4>
              <h4><span class="unique__modifier">Type - </span>${element.Type}</h4>
        </div>      
      `;
}

function filterByMovies(event) {
  main(event.target.value);
}

main();
