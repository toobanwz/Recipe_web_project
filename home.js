document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchResults = document.getElementById('searchResults');
    const recipeList = document.getElementById('recipeList');
    const recipeLinks = recipeList.querySelectorAll('a');
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterAndDisplayResults(searchTerm);
    });
    function filterAndDisplayResults(searchTerm) {
        if (searchTerm) {
            const matchingLinks = Array.from(recipeLinks).filter(link => link.textContent.toLowerCase().includes(searchTerm));
            if (matchingLinks.length > 0) {
                const resultHTML = matchingLinks.map(link => `<li>${link.outerHTML}</li>`).join('');
                searchResults.innerHTML = `<div>Search results:</div><ul>${resultHTML}</ul>`;
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = `<div class="no-results">No results found for "${searchTerm}"</div>`;
                searchResults.style.display = 'block';
            }
        } else {
            searchResults.style.display = 'none';
        }
    }
});
function openhome() {
    window.open("home.html", "_self");
}
function openabout() {
    window.open("aboutus/about.html", "_self");
}
function openhelp() {
    window.open("gethelp/help.html", "_self");
}
function openconnect() {
    window.open("joinus/connect.html", "_self");
}
function breakfast() {
    window.open("therecipes/breakfast.html", "_self");
}
function ld() {
    window.open("therecipes/ld.html", "_self");
}
function dessert() {
    window.open("therecipes/dessert.html", "_self");
}
function drink() {
    window.open("therecipes/drink.html", "_self");
}
//back to top button function
let mybutton = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


