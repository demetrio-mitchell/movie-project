$(document).ready(function () {
    $("#loading").hide()
    getMovies()
});

//*building the movies onto the screen*
function buildMovies(data) {
    $('#movie-list').empty()
    data.forEach(function (movie) {
        if (!movie.title) {
            return
        }
        $('#movie-list').append(`
         <div class="card col-md-5 mb-3 px-0" id="movie-card" style="width: 18rem;">
            <img src="">
            <div class="card-body back">
                <h5 class="card-title card-text-color"><span id="title${movie.id}">${movie.title}</span>(<span id="year${movie.id}">${movie.year}</span>)</h5>
                <img src="img/poster${movie.id}.jpg" alt="img" width="125" height="175">
                <p class="card-text card-text-color">rating:<span id="rating${movie.id}">${movie.rating}</span><br>plot: <br><span id="plot${movie.id}">${movie.plot}</span></p>
                <button type="button" class="btn btn-primary" onclick="$('#editModal').show()" data-toggle="modal" data-id="${movie.id}" data-target="#editModal" id="${movie.id}">Edit</button>
                <button type="button" class="btn btn-primary" data-value="${movie.id}" id="delete-${movie.id}">Delete</button>
            </div> 
        </div>
        `)
        deleteButton(movie.id)
    })
}

// *add a movie button*
$('#button').click(function () {
    const reviewObj = {
        title: $('#title').val(),
        year: $("#year").val(),
        rating: $('#rating').val(),
        plot: $("#plot").val()
    };
    addMovie(reviewObj);
});

//*saving changes button*
$("#save-btn").click(function () {
    const editObj = {
        title: $("#modal #title-change").val(),
        year: $("#modal #year-change").val(),
        rating: $("#modal #rating-change").val(),
        plot: $("#modal #plot-change").val()
    };
    editMovie(editObj, $("#save-btn").attr("data-id"));
})


//*filling in the already existing data when editing the card*
$('#modal').on('show.bs.modal', function (e) {

    let movieId = $(e.relatedTarget).data("id")
    $("#save-btn").attr("data-id", movieId)
    let movieName = "#title" + movieId
    let movieYear = "#year" + movieId
    let ratingId = "#rating" + movieId
    let moviePlot = "#plot" + movieId
    $("#modal #title-change").val($(movieName).text())
    $("#modal #rating-change").val($(ratingId).text())
    $("#modal #year-change").val($(movieYear).text())
    $("#modal #plot-change").val($(moviePlot).text())

});

//*delete button*
function deleteButton(id) {
    $(`#delete-${id}`).click(function () {
        console.log("this button is being clicked")
        let confirmResponse = confirm("Are you sure you want to delete this movie?");

        if (confirmResponse === true) {
            deleteMovie(id);
        } else {
            return alert("delete cancelled")
        }

    })
}