$(document).ready(function () {
    alert("loading...");
    getMovies()
});

function buildMovies(data) {
    $('#movie-list').empty()
    data.forEach(function (movie) {
        if (!movie.title) {
            return
        }
        $('#movie-list').append(`
<h3>${movie.title}(${movie.year})</h3>
<p>
rating: ${movie.rating}<br><br> plot: <br>${movie.plot}
</p>
<hr>
`)
    })

}

$('#button').click(function () {
    const reviewObj = {
        title: $('#title').val(),
        rating: $('#rating').val(),
    };
    console.log(reviewObj)
    addMovie(reviewObj);
});

