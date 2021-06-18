function getMovies() {
    $.ajax({
        url: "https://rigorous-outrageous-podium.glitch.me/movies",
        type: "GET",

        success: function (data) {
            console.log(data);
            buildMovies(data)
        }
    });
}

function addMovie(reviewObj) {

    const url = "https://rigorous-outrageous-podium.glitch.me/movies";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewObj),
    };
    fetch(url, options)
        .then(response => console.log(response))/* review was created successfully */
        .then(getMovies)
        .catch(error => console.error(error)); /* handle errors */

}

function editMovie(editObj, id){

    const url = `https://rigorous-outrageous-podium.glitch.me/movies/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editObj),
    };
    fetch(url, options)
        .then(response => console.log(response))/* review was created successfully */
        .then(getMovies)
        .catch(error => console.error(error)); /* handle errors */
}

function deleteMovie (id) {
    const url = `https://rigorous-outrageous-podium.glitch.me/movies/${id}`;
    const deleteMethod = {
        method: 'DELETE', // Method itself
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        },
    }
    fetch(url, deleteMethod)
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .then(getMovies)
        .catch(err => console.log(err)) // Do something with the error
}