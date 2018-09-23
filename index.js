$(document).ready(function (){
    const searchTerm = document.getElementById('searchTerms').value;
    const searchUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;
    debugger;
    $.get(searchUrl, function(response) {
        searchRepositories(response);
    }).fail(function(error){
        $('#errors').append("<p>/error/</p>");
    });
});


function searchRepositories(response) {

    const searchTerm = document.getElementById('searchTerms').value;
    const searchUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;

    $.get(searchUrl, function(response) {
        displayRepositories(response);
    }).fail(function(error){
        displayError();
    });
}

function displayRepositories(repos) {
    debugger;
    let reposList = '<ul>' + `${repos.items.map(function(repo) {
            return '<li>' + repo.name  +
            '<a href="#" onclick="showCommits('+ this + ');">See Commits</a>' + '</li>';
        }
    )};` + '</ul>';

    document.getElementById('results').innerHTML + reposList;
    debugger;
}

function showCommits() {
    debugger;

}


function displayError() {
    $('#errors').append("<p>/error/</p>");
}
