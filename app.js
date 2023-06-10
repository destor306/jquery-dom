
let movielist ={};
let movieId = 0;
$('button').on('click', function(evt){
    evt.preventDefault();
    const title = $('#title').val();
    const rating = $('#rating').val();
    if(title.length < 2 ){
        alert("Title should be longer at least 2 characters");
        return;
    }
    if(rating<0 || rating >10){
        alert("rating should be bigger than 0 and less than 10");
        return;
    }
    const movieinfo = createMovieDom(title, rating);
    $('#table-add-input').append(movieinfo);
    //createMovieDom(title, rating);
})

$('tbody').on('focus', '#table-remove-input', function(){
     $(this).parent().parent().remove();
})

function createMovieDom(title, rating){
    movielist[movieId] ={title, rating};
    movieId++;
    return `<tr><th scope="row">${title}</th>  <th scope="row">${rating}</th> <th scope="row"><button id="table-remove-input">Remove</button></th></tr>`;
}