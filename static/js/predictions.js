//run on page load
$(document).ready(function() {
    // Add event listener for submit button
    $("#submit").on("click", function(event) {
        // Prevent the page from refreshing
        event.preventDefault();
        getGenre();
    });
});

// gets data for the table
function getGenre() {
    var payload = {
        "acousticness": $("#acousticness").val(),
        "dance": $("#dance").val(),
        "valence": $("#valence").val(),
        "energy": $("#energy").val(),
        "instrumentalness": $("#instrumentalness").val(),
        "tempo": $("#tempo").val(),
        "liveness": $("#liveness").val(),
        "loudness": $("#loudness").val(),
        "duration": $("#duration").val(),
        "popularity": $("#popularity").val(),
        "speechiness": $("#speechiness").val(),
        "key": $("#key").val(),
        "mode": $("#mode").val()
    };

    $.ajax({
        type: 'POST',
        url: "/getGenre/",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(data) {
            // alert("YAY Post request Worked");
            // console.log(data);
            $("#prediction").text(data['genre'])
        }
    });
}