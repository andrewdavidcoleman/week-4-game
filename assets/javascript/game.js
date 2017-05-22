console.log('it works!')
$( document ).ready(function() {
    console.log( "ready!" );
});
// Objective 1: I need to generate a random number and have it populate in random-number div
var randNum = Math.floor((Math.random() * (120-19) + 19));
console.log(randNum);
$("#game-number").html(randNum);
// Objective 1 accomplished!

// Objective 2: I need to keep track of wins and losses and have it populate in the respective divs:
var wins = 0;
var losses = 0;
$("#wins").html(wins);
$("#losses").html(losses);
// Objective 2 accomplished!

//Objective 3: I need to keep track of the users number and have it populate in the user-number div
var userNum = 0;
$("#user-number").html(userNum);
// Objective 3 accomplished!

// Objective 4: I need to assign random number values to each crystal
var red = Math.floor((Math.random() * (12-1) + 1));
var blue = Math.floor((Math.random() * (12-1) + 1));
var yellow = Math.floor((Math.random() * (12-1) + 1));
var green = Math.floor((Math.random() * (12-1) + 1));
// Objective 4 accomplished!

// Objective 5: I need to register a click on each crystal image
// $("#red").click(function(){
// console.log("red!")
// });
// $("#blue").click(function(){
// console.log("blue!")
// });
// $("#yellow").click(function(){
// console.log("yellow!")
// });
// $("#green").click(function(){
// console.log("green!")
// });
// Objective 5 accomplished!

// added this function after the fact to try to get my if statements to access the userNum from the functional scope instead of the global scope
$(".container").click(function(){

// Objective 6: I need to add each crystals number to the users score when that crystal is clicked and have the new value populate on the page
 $("#red").unbind().click(function(){
	console.log(red)
	userNum = userNum + red;
	console.log("Your number is: " + userNum)
	console.log("Trying to get " + randNum + "!")
	$("#user-number").html(userNum);
});
$("#blue").unbind().click(function(){
	console.log(blue)
	 userNum = userNum + blue;
	console.log("Your number is: " + userNum)
	console.log("Trying to get " + randNum + "!")
	$("#user-number").html(userNum);
});
$("#yellow").unbind().click(function(){
	console.log(yellow)
	 userNum = userNum + yellow;
	console.log("Your number is: " + userNum)
	console.log("Trying to get " + randNum + "!")
	$("#user-number").html(userNum);
});
$("#green").unbind().click(function(){
	console.log(green)
	 userNum = userNum + green;
	console.log("Your number is: " + userNum)
	console.log("Trying to get " + randNum + "!")
	$("#user-number").html(userNum);
});
// Objective 6 accomplished!

// Objective 7: I need to register a win if the users number equals the game number and add 1 to the win total on the page
if (userNum === randNum) {
    	alert("You won!!!")
        wins = wins + 1;
        $("#wins").html(wins);
        userNum = 0;
        $("#user-number").html(userNum);
        randNum = Math.floor((Math.random() * (120-19) + 19));
        $("#game-number").html(randNum);
        red = Math.floor((Math.random() * (12-1) + 1));
		blue = Math.floor((Math.random() * (12-1) + 1));
		yellow = Math.floor((Math.random() * (12-1) + 1));
		green = Math.floor((Math.random() * (12-1) + 1));
        }
if (userNum > randNum) {
        alert("You lose:( Try again!")
        losses = losses + 1;
        $("#losses").html(losses);
        userNum = 0;
        $("#user-number").html(userNum);
        randNum = Math.floor((Math.random() * (120-19) + 19));
        $("#game-number").html(randNum);
        red = Math.floor((Math.random() * (12-1) + 1));
		blue = Math.floor((Math.random() * (12-1) + 1));
		yellow = Math.floor((Math.random() * (12-1) + 1));
		green = Math.floor((Math.random() * (12-1) + 1));
		}
// Objective 7 accomplished!

})


/*Questions:
1) I have the whole game wrapped in $(".container").click(function(){ so that the if statements
	will access some of the variables from the functional scope instead of the global scope, but this makes
	it so that you have to click somewhere on the page once before you start playing the game. I wanted the
	game to just start right away, and for the user to be able to just click a crystal right away instead of
	clicking once somewhere on the page first. I tried using .load() and .ready() instead of .click() but both of these made other
	parts of my script not work. Why?
*/












