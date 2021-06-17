$.ajax({
        url: "https://rigorous-outrageous-podium.glitch.me/movies",
        type: "GET",

        success: function(data){
            console.log(data);
            getMovies(data)
        }
    });

function addMovie(){
$.ajax({
    url: "https://rigorous-outrageous-podium.glitch.me/movies",
    type: "POST",


}
