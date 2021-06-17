$(document).ready(function () {
    alert("loading...");
});

function getMovies(data) {
    $('#movie-list').append(`
<h3>${data[0].title}(${data[0].year})</h3>
<p>
rating: ${data[0].rating}<br><br> plot: <br>${data[0].plot}
</p>
<hr>
<h3>${data[1].title}(${data[1].year})</h3>
<p>
rating: ${data[1].rating}<br><br> plot: <br>${data[1].plot}
</p>
<hr>
<h3>${data[2].title}(${data[2].year})</h3>
<p>
rating: ${data[2].rating}<br><br> plot: <br>${data[2].plot}
</p>
<hr>
<h3>${data[3].title}(${data[3].year})</h3>
<p>
rating: ${data[3].rating}<br><br> plot: <br>${data[3].plot}
</p>





`)
}