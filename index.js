function searchResult(event){
    userSearch = event.target.value
    sessionStorage.setItem("userSearch", userSearch)
    window.location.href = `${window.location.origin}/movies.html`
}