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
        <div id="movie${movie.id}"> <h3 id="title${movie.id}">${movie.title}</h3> <h3><span id="year${movie.id}">(${movie.year})</span></h3>
            <p id="rating${movie.id}">
                rating: ${movie.rating}
            </p>
            <p id="plot${movie.id}">plot: <br>${movie.plot}</p>
            <button type="button" class="btn btn-primary test" onclick="$('#editModal').show()" data-toggle="modal" data-id="${movie.id}" data-target="#editModal" id="${movie.id}">Edit</button>
           <button type="button" class="btn btn-primary" data-value="${movie.id}" id="delete-${movie.id}">Delete</button>
            <hr>
        </div>
        `)
deleteButton(movie.id)
    })
}

// add a movie button
$('#button').click(function () {
    const reviewObj = {
        title: $('#title').val(),
        year: $("#year").val(),
        rating: $('#rating').val(),
        plot: $("#plot").val()
    };
    addMovie(reviewObj);
});

// saving changes button
$("#save-btn").click(function () {
    const editObj = {
        title: $("#modal #title-change").val(),
        year: $("#modal #year-change").val(),
        rating: $("#modal #rating-change").val(),
        plot: $("#modal #plot-change").val()
    };
    editMovie(editObj, $("#save-btn").attr("data-id"));
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $("#modal").hide();
})


//modal info
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

//delete button
function deleteButton (id) {
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