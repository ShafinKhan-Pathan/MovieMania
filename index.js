// http://www.omdbapi.com/?i=tt3896198&apikey=7861bc7c

function searchResult(event){
    userSearch = event.target.value
    localStorage.setItem("userSearch", userSearch)
    window.location.href = `${window.location.origin}/movies.html`
}