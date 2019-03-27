console.log("I'm here, bitch!")

//create a variable array for buttons
var topics = ["shark", "orca", "pufferfish"]
var searchInput = $("#seaAnimal-input").val().trim();


//need to set a variable called type and store it with the content going in the search?
var queryUrl = 'https://api.giphy.com/v1/gifs/search?q='+searchInput+'&api_key=I1AxUtIfnK3ea4APyhH6EjBSeeMZqzqw'

//or i think maybe i can use this and still have for things inside the query//
//var queryUrl = 'https://api.giphy.com/v1/gifs/search?q='+"sea"+"animals"+'&api_key=I1AxUtIfnK3ea4APyhH6EjBSeeMZqzqw'

function showButtons(){
    for(i = 0; i < topics.length; i++){
        var startButtons = $("<button>" + topics[i] + "</button>");
    $("#buttons").append(startButtons);
    }
}
showButtons();

$("#buttons").on("click", function(){
    console.log("click event working");
   // var newButtons = $("#buttons").val().trim();
   // console.log("new button " + newButtons)
})