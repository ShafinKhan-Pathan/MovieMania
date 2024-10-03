// http://www.omdbapi.com/?apikey=7861bc7c&s=


const userInputMovie = localStorage.getItem("userSearch")
const searchMovieElement = document.querySelector('.search__movie--wrapper')
const searchTitle = document.querySelector('.search__title')


async function main(){
    const movie = await fetch(`http://www.omdbapi.com/?apikey=7861bc7c&s=${userInputMovie}`)
    const movieData = await movie.json()
    console.log(movieData)
    if (movieData.Search){
        searchTitle.innerHTML = `<h1 class="movie_header-h1">Here are the search results for '${userInputMovie}'</h1>`
        searchMovieElement.innerHTML += movieData.Search.map((element) => searchMovieHTML(element)).join("")
    }
    
}

main()

function searchMovieHTML(element) {
    return `
        <div class="search__movie">
          <figure class="search__figure--image">
            <img class="search__movie--image" src="${element.Poster}" alt="">
          </figure>
          <h3 class="search__movie__title"><span class="unique__modifier">Title - </span>${element.Title}</h3>
                <h4><span class="unique__modifier">Year - </span>${element.Year}</h4>
                <h4><span class="unique__modifier">Type - </span>${element.Type}</h4>
          </div>      
        `
}


// const userInput = localStorage.getItem("userSearch")
// const movieListElement = document.querySelector('.search__movie-list')

// async function main() {
//     const movie = await fetch(`http://www.omdbapi.com/?apikey=7861bc7c&s=${userInput}`)
//     const movieData = await movie.json()
//     if (movieData.Search){
//         movieListElement.innerHTML = `<h1 class="movie_header-h1">Your Search Movies ${userInput}</h1>`
//         movieListElement.innerHTML += movieData.Search.map((element) => movieHTML(element)).join("");
//     }
    
// }

// function movieHTML(element){
//   return `
//   <div class="search__movie-list">
//   <div class="search__movies__wrapper">
//             <div class="search__movie">
//               <figure class="search__movie__figure--image">
//                 <img src="${element.Poster}" alt="" class="search__movie__image">
//               </figure>
//               <div class="search__movie__description">
//                 <h3><span class="unique__modifier">Title - </span>${element.Title}</h3>
//                 <h4><span class="unique__modifier">Year - </span> ${element.Year}</h4>
//                 <h4><span class="unique__modifier">Time - </span> ${element.Type}</h4>
//               </div>
//             </div>
//           </div>
//           </div>`;
// }

// main();