let userScore = 0;  // we have these to variables as let as we want the score to change
let computerScore = 0; 
const userScore_span = document.getElementById("user-score"); /* put "_span" to clealy see it is in a span tag in html file */
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board"); /* querySelector returns the first element that matches
 the specified selector */
const result_div = document.querySelector(".result"); 
const rock_div = document.querySelector("r")
const paper_div = document.querySelector("p")
const scissors_div = document.querySelector("s")
   /* here we are "cashing the dom" which is where we stored all of these things in variable to use later
   it is quicker to just write userScore_span than document.Ele... */

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    console.log((Math.floor(Math.random() *3)));    //  const randomNumber =
    return choices[randomNumber];    
}      
       /* in this function we have a random number generator from 1 to 3, which is a whole number due to math.floor. 
       the array is either rock paper or scissors, abreviated in game().
       why return line in []? */

function win() { 

}

function lose() { 
    
}

function draw() { 
    
}

function game(userChoice) {            
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp": 
    win();         
    break; 
      case "rp": 
      case "ps": 
      case "sr": 
    lose(); 
    break;
      case "rr": 
      case "pp": 
      case "ss": 
    draw(); 
    break; 
    }
}
        /* first we accept userChoice as an argument. switch is basically the same as if statements. the 'win()' 
        and other 2 conect the case to the outcome on the browser. we cover every case that could occur and put
        a break inbetween? */


function main() {                                        // this function can get all 3 choices   
    rock_div.addEventListener('click', function() {
      game('r');   
      })
    paper_div.addEventListener('click', function() {
        game('p');   
      })
    scissors_div.addEventListener('click', function() {
        game('s');   
      })
}                /* eventListeners see if something works, like the buttons */

main()