$(document).ready(function (){

});


function searchRepositories() {
    const searchTerm = document.getElementById('searchTerms').value;
    const searchUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;
    $.get(searchUrl, function(response) {
        displayRepositories(response);
    }).fail(function(error){
        $('#errors').append('<p>/error/</p>');
    });
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
