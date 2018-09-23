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
    debugger;
    let reposList = '<ul>' + `${repos.items.map(function(repo) {
            return '<li>' + repo.name + '</li>' +
            '<a href="#" onclick="showCommits('+ this + ');">See Commits</a>';
        }
    )};`

    document.getElementById('results').innerHTML + reposList;
}

function displayRepositories(repos) {
    let reposList = '<ul>' + `${repos.items.map(function(repo) {
            return '<li>' + repo.name + '</li>' +
            '<a href="#" onclick="showCommits('+ this + ');">See Commits</a>';
        }
    )};`

    document.getElementById('results').innerHTML + reposList;
}

function showCommits() {
    debugger;

}


function displayError() {

}
