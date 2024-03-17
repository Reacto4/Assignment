//Define script variables

let guessCount = 0;
let maxGuess = 5;

let arr = [];


const userName = document.querySelector("#sbmtName");
const userNa = document.querySelector("#sub");
const result = document.getElementsByClassName("item");
const endBtn = document.querySelector("#end");
const list = document.querySelector(".ui.list");
const scoreName = document.querySelector(".content")



const form = document.querySelector("form");
const message = document.querySelector("#message");
const score = document.querySelector("#score");
const bestScore = document.querySelector("#bestscore");
const againBtn = document.querySelector("#again");
const correct = document.querySelector("#correct");
const submitBtn = document.querySelector("[type='submit']");

let num = Math.round(Math.random() * 10);


userNa.addEventListener('click', (evt) => {
  evt.preventDefault()
  const header = document.querySelector('h1')
  header.textContent = `Hello, ` + userName.value.toUpperCase() + ` , welcome to the guessing game!`
  console.log(userName.value);
  
 })


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
        document.getElementById("score").innerHTML = 0;
        
     
        })

        endBtn.addEventListener('click', (evt) => {

          console.log('End button working');
              myFunction();
            // Create Strawberry
            arr.splice(0,arr.length);
            
            
      
         })
  

  function check(){

   if(guessInput.value == num){
      message.textContent = 'You guessed it right!'
      correct.style.display = "block";
      submitBtn.disabled = true;
       
      guessInput.value = "";
      guess.focus();
      storeArray();
      bestScore.textContent = guessCount; 
      let min;
      if (arr.length > 0) {
          min = Math.min(...arr);
      } else {
          min = 0; // Set a default value if the array is empty
      }
      bestScore.textContent = min;
      console.log(min);
      
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

  function storeArray(){
    arr.push(guessCount);
    console.log(arr);
  }

  


  function myFunction() {

    let sum = 0;
    arr.forEach( num => {
    sum += num});

    let table = document.getElementById("scoreTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = userName.value;
    cell2.innerHTML = sum;
  
}



  
    
