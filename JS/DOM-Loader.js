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
        <div id="movie${movie.id}"> <h3 id="title${movie.id}">${movie.title}(${movie.year})</h3>
            <p id="rating${movie.id}">
                rating: ${movie.rating}
            </p>
            <p id="plot">plot: <br>${movie.plot}</p>
            <button type="button" class="btn btn-primary test" onclick="$('#editModal').show()" data-toggle="modal" data-id="${movie.id}" data-target="#editModal" id="${movie.id}">Edit</button>
            <hr>
        </div>
        `)
    })

}

$('#button').click(function () {
    const reviewObj = {
        title: $('#title').val(),
        rating: $('#rating').val(),
    };
    addMovie(reviewObj);
});


$("#save-btn").click(function () {
    const editObj = {
        title: $("#modal #title-change").val(),
        rating: $("#modal #rating-change").val(),
    };
    editMovie(editObj, $("#save-btn").attr("data-id"));
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $("#modal").hide();
})

$('#modal').on('show.bs.modal', function (e) {

    let movieId = $(e.relatedTarget).data("id")
    $("#save-btn").attr("data-id", movieId)
    let movieName = "#title" + movieId
    let ratingId = "#rating" + movieId
        $("#modal #title-change").val($(movieName).text())
    $("#modal #rating-change").val($(ratingId).text())
});