$(document).ready(function (){
    // const searchTerm = document.getElementById('searchTerms').value;
    // const searchUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;
    // debugger;
    // $.get(searchUrl, function(response) {
    //     searchRepositories(response);
    // }).fail(function(error){
    //     $('#errors').append("<p>/error/</p>");
    // });
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
            debugger;
            return '<li>' + repo.name  +
            '<a href="#" onclick="showCommits(' + repo.name +');">See Commits</a>' + '</li>'
        }
    ).join('')}` + '</ul>';
    return reposList;

}

function showCommits() {
    debugger;

}


function displayError() {
    $('#errors').append("<p>/error/</p>");
}
