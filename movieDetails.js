// http://www.omdbapi.com/?i=tt3896198&apikey=7861bc7c

const getID = localStorage.getItem("id")
const movieDetailElement = document.querySelector('.movie__details')
async function getData(){
    movieDetailElement.classList += ' .loading__state'
    const movieDetails = await fetch(`http://www.omdbapi.com/?i=${getID}&apikey=7861bc7c`)
    const movieDetailsData = await movieDetails.json()
    movieDetailElement.classList.remove('loading__state')
    console.log(movieDetailsData)
    if (movieDetailsData){
        movieDetailElement.innerHTML = getMovieHTML(movieDetailsData);
    }
    
}

function getMovieHTML(movieDetail){
    const movieImage = movieDetail.Poster !== "N/A" ? movieDetail.Poster : "https://via.placeholder.com/300x450?text=No+Image+Available"
    return `
            <div class="movie__details--image">
                    <figure class="movie__details--figure">
                        <img class="movie__details-image" src="${movieImage}"
                            alt="">
                    </figure>
                </div>
                <div class="movie__details--description">
                    <h1 class="movie__detail--title"><span class="unique__modifier">Title - </span> ${movieDetail.Title}</h1>
                    <h2 class="movie__detail"><span class="unique__modifier">Rated - </span> ${movieDetail.Rated}</h2>
                    <h2 class="movie__detail"><span class="unique__modifier">Release - </span> ${movieDetail.Released}</h2>
                    <h2 class="movie__detail"><span  class="unique__modifier">Runtime - </span>${movieDetail.Runtime}</h2>
                    <h2 class="movie__detail"><span  class="unique__modifier">Actors - </span>${movieDetail.Actors}</h2>
                    <h2 class="movie__detail"><span class="unique__modifier">Awards - </span>${movieDetail.Awards}</h2>
                    <h2 class="movie__detail"><span  class="unique__modifier">BoxOffice - </span>${movieDetail.BoxOffice}</h2>
                    <h2 class="movie__detail"><span class="unique__modifier">Director - </span>${movieDetail.Director}</h2>
                    <h2 class="movie__detail"><span class="unique__modifier">imdbRating - </span>${movieDetail.imdbRating}</h2>
                </div>
            `
}

setTimeout(() => {
    getData()
}, 1000);