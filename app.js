let myFavMovie = "Avatar";

let userInput = prompt("Guess and Enter My Favorite movie");

if (myFavMovie === userInput) {
    alert("Congratulations!");
} else {
    while (myFavMovie !== userInput) {
        userInput = prompt("Try Again");
    }
    alert("Congratulations!");
}