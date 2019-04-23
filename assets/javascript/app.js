console.log("I'm here, Bitch!")

$(function () {
    addButtons(searchArray, "searchButton", "#buttons-view");
    console.log("page loaded");

})

var searchArray = ["Step Brothers", "Bigfoot", "birds"];

$("#search-input").val(" ");



function addButtons(searchArray, classToAdd, areaToAdd) {
    $(areaToAdd).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAdd).append(a);

    }
}

$(document).on("click", ".searchButton", function () {
    var type = $(this).data('type');
    var queryURL = " https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=I1AxUtIfnK3ea4APyhH6EjBSeeMZqzqw&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);

        for (var i = 0; i < response.data.length; i++) {
            var searchDiv = $('<div class = "col-xs-5">');
            var rating = response.data[i].rating;
            var p = $("<p>").text("Rating : " + rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $("<img>");
            image.attr('src', still);
            image.attr('data-still', still);
            image.attr('data-animated', animated);
            image.attr('data-state', 'still');
            image.addClass("searchImage");
            searchDiv.prepend(p);
            searchDiv.prepend(image);
            $("#gifs").prepend(searchDiv);
        }
    })
})

$(document).on("click", ".searchImage", function () {
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

$("#add-button").on("click", function () {
    //this looks for the first version of the input
    var newSearch = $('input').eq(0).val();
    $("#search-input").val(" ");
    searchArray.push(newSearch);
    addButtons(searchArray, "searchButton", "#buttons-view");
    //need to return false to prevent from re loading the page automatically
    return false;

})

