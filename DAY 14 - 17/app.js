// -------------------------------------------------- -:(MY FAVORITE MOVIE GUESS GAME):- --------------------------------------------------

// let myFavMovie = "Avatar";

// let userInput = prompt("Guess and Enter My Favorite movie");

// if (myFavMovie === userInput) {
//     alert("Congratulations!");
// } else {
//     while (myFavMovie !== userInput) {
//         userInput = prompt("Try Again");
//     }
//     alert("Congratulations!");
// }



// -------------------------------------------------- -:(LOOPS WITH ARRAY):- --------------------------------------------------

// let fruits = ["mango" , "orange" , "banana" , "grapes" , "kiwi"];

// for(let i = 0; i<fruits.length; i++) {
//     console.log( i , fruits[i]);
// }


// -------------------------------------------------- -:(NESTED LOOPS WITH NESTED ARRAY):- --------------------------------------------------

// let heroes = [["Superman" , "Batman" , "Spiderman"] , ["Ironman" , "Hulk" , "Thor"]];

// for(let i = 0; i<heroes.length; i++) {
//     console.log(`List #${i}`);
//     for(let j = 0; j<heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }


// -------------------------------------------------- -:(TODO APP):- --------------------------------------------------

let todo = [];
let req = prompt("please enter your request!");

while (true) {
    if (req === "quiz") {
        console.log("quitting app");
        break;
    }

    if (req === "list") {
        console.log("**********");
        for (task of todo) {
            console.log(task);
        };
        console.log("**********");
    } else if (req === "add") {
        let task = prompt("Enter your new task");
        todo.push(task);
        console.log(`added to list`);
    }
}