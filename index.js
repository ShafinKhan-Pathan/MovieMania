function searchResult(event){
    userSearch = event.target.value
    sessionStorage.setItem("userSearch", userSearch)
    window.location.href = `${window.location.origin}/MovieMania/movies.html`
}

function openMenu(){
    document.body.classList += " menu--open"
}
function closeMenu(){
    document.body.classList.remove("menu--open")
}