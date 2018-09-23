$(document).ready(function (){
    Handlebars.
});


function searchRepositories() {
    const searchTerm = document.getElementById('searchTerms').value;
    const searchUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;
    $.get(searchUrl, function(response) {
        displayRepositories(response);
    });
}

function displayRepositories(repos) {

    
}

function displayError() {

}
