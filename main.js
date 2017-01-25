//Let's Play Rock, Paper, Scissors!
//Global Variables
var userChoice;
var computerChoice;
var winner;
var playerRunningTotal;
var computerRunningTotal;

//makeing a function to prompt the user to make a choice and we will return the user's choice
function getPlayerMove(){
    userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'."); //prompts the user to make a choice of either rock, paper or scisors
    return userChoice; //The return statement stops the execution of a function and returns a value from that function. So in this case it will return the userChoice of rock, paper, scissors
}
console.log("Player chose " + getPlayerMove());//calls function and logs a message in console

//making a function to generate and return a random choice from the computer
function getComputerMove(){
	var randomNumber = Math.random(); //uses Math.random() to get a random number
	if (randomNumber < 0.33){ //if statements
    	computerChoice = "rock";
    } else if (randomNumber < 0.66) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    }
  	return computerChoice; //stops function and returns the value from computerChoice
};
console.log("The computer chose " + getComputerMove());//calls function and logs a message in console

//function that will compare the computer's move to the player's move in order to determine a winner
function getWinner (playerMove, computerMove){
	if (playerMove === computerMove) { //if statements
    	winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
    	winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
    	winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") { 
    	winner = "player";
    } else {
    	winner = "computer";
    }
     return winner; //stops function and returns value of winner
	}
               
 console.log("The winner is " + getWinner("rock", "paper")); //calls function with two arguments to test and logs a message in console

//function to keep track of how many times the player and the computer have won - this is a game of best of five
function playToFive() {
	console.log("Let's play Rock Paper Scissors");
  	playerRunningTotal = 0; //start each total with zero
  	computerRunningTotal = 0; //start each total with zero
	
    while (playerRunningTotal < 5 && computerRunningTotal < 5) {
		userChoice = getPlayerMove(); //calls getPlayerMove function
      	computerChoice = getComputerMove(); //calls getComputerMove function
      	winner = getWinner(userChoice, computerChoice); //calls getWinner function with the arguments 'userChoice' which is the variable for the function getPlayerMove() and 'computerChoice' which is the variable for the function computerChoice()
			
       if (winner === "player") { //if the player is the winner then total increases by one until five is reached
     	playerRunningTotal++;
    	} else if (winner === "computer") { //if computer is the winner then total increases by one until five is reached
      	computerRunningTotal++;
    	}
  
	alert("Player chose " + userChoice + " while Computer chose " + computerChoice + "! \nThe score is Player "+ playerRunningTotal + ", Computer " + computerRunningTotal + "."); //alert is displayed after each round
  }
}

playToFive();
               