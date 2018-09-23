$(document).ready(function (){

});


function searchRepositories(response) {

    const searchTerm = document.getElementById('searchTerms').value;
    const searchUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;

    $.get(searchUrl, function(response) {
        $('#results').html(displayRepositories(response));
    }).fail(function(error){
        displayError();
    });
}

function displayRepositories(repos) {

    let reposList = '<ul>' + `${repos.items.map(function(repo) {
            return '<li>' + repo.name  +
            '<a href="#" data-repo="'+ repo.name +'" onclick="showCommits(this);">See Commits</a>' + '</li>'
        }
    ).join('')}` + '</ul>';
    return reposList;

}

function showCommits(repo) {
    const repoName = repo.dataset.repo;
    


}


function displayError() {
    $('#errors').append("<p>/error/</p>");
}
