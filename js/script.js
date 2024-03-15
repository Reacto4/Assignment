//Define script variables

let guessCount = 0;
let maxGuess = 3;
let userName = prompt("Please, enter you name!")

const form = document.querySelector("form");
const message = document.querySelector("#message");
const score = document.querySelector("#score");
const bestScore = document.querySelector("#bestscore");
const againBtn = document.querySelector("#again");
const correct = document.querySelector("#correct");
const submitBtn = document.querySelector("[type='submit']");

let num = Math.round(Math.random() * 10);


const header = document.querySelector('h1')
header.textContent = 'Hello ' + userName + ' welcome to the guessing game!'

const guessInput = form.elements.guess;
console.log(guessInput.value) // 


form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    console.log('Input value:' + guessInput.value)
    guessCount++;

    score.textContent = guessCount;
    //checking guess count

    console.log('The count is ' + guessCount);
    //checking random number

    console.log('The rnd num ' + num);
   check();
    
    
    
  })

againBtn.addEventListener('click', (evt) => {

         console.log('bah');
         num = Math.round(Math.random() * 10);
         console.log('New random ' + num);
         guessCount = 0;
         guessInput.value = "";
         guess.focus();
         correct.style.display ="";
         message.textContent = "Start guessing...Again!";
         submitBtn.disabled = false;
    document.getElementById("message").style.background = "revert";  
     
        })
  

  function check(){

   if(guessInput.value == num){
      message.textContent = 'You guessed it right!'
      correct.style.display = "flex";
      bestScore.textContent = guessCount;
      submitBtn.disabled = true;
       
        guessInput.value = "";
      guess.focus();
      
    }
      
      else if (guessCount == maxGuess) {
        message.textContent = 'Sorry, you reached your maximum tries!'
        submitBtn.disabled = true;
       document.getElementById("message").style.background = "yellow";  
     }
   
   
   else if (guessInput.value > num) {
      message.textContent = 'Guess is too high!'
      guessInput.value = "";
      guess.focus();
   }
    else {
      message.textContent = 'Guess is too low!'
      guessInput.value = "";
      guess.focus();
      
   }

  }
  
 


 