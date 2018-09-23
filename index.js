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
            '<a href="#" data-usrName=' + repo.owner.login + ' data-repo="'+ repo.name +'" onclick="showCommits(this);">See Commits</a>' + '</li>'
        }
    ).join('')}` + '</ul>';
    return reposList;

}

function showCommits(el) {

    // const repoName = repo.dataset.repo;
    // const userName = repo.dataset.usrname;
    const userName = el.dataset.owner;
    const repoName = el.dataset.repository;

    const searchUrl = `https://api.github.com/repos/${userName}/${repoName}/commits`
    $.get(searchUrl, function(response) {
        $('#results').html(displaycommits(response));
    }).fail(function(error){
        displayError();
    });
}

function displaycommits(commits){
    debugger;
    let commitsList = '<ul>' + `${commit.items.map(function(commit) {
            return '<li>' + commit.sha + '</li>'
        }
    ).join('')}` + '</ul>';
    return reposList;

}


function displayError() {
    $('#errors').append("<p>/error/</p>");
}
