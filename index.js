function searchResult(event){
    userSearch = event.target.value
    sessionStorage.setItem("userSearch", userSearch)
    window.location.href = "./movies.html";
    // window.location.href = `${window.location.origin}/movies.html`
}

function openMenu(){
    document.body.classList += " menu--open"
}
function closeMenu(){
    document.body.classList.remove("menu--open")
}