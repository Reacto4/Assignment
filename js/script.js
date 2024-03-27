//Define script variables

let guessCount = 0;
let maxGuess = 5;

let arr = []; //array for storing scores

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

let num = Math.floor((Math.random() * 10) +1); //generates numb between 1-10

// form for name input

userNa.addEventListener('click', (evt) => {
  evt.preventDefault()
  const header = document.querySelector('h1')
  header.textContent = `Hello, ` + userName.value.charAt(0).toUpperCase() 
  + userName.value.slice(1) + `, welcome to the guessing game!`;
  console.log(userName.value);
  console.log(userName.value.slice(1));  
 })

const guessInput = form.elements.guess;
console.log(guessInput.value) // 

// check button listener
form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    console.log('Input value:' + guessInput.value)
    guessCount++;

    score.textContent = guessCount;    //checking guess count

    console.log('The count is ' + guessCount);     //checking random number

    console.log('The rnd num ' + num);

   //x-ing out numbers in the row

   document.querySelector("#warning").style.visibility = "hidden";
   let pickId = guessInput.value;
   console.log("pickid vale " + pickId)
   let removeNum = document.getElementById(pickId);
   console.log(removeNum);
   removeNum.innerHTML = "<font color ='red', weight = bold, size = 5px>X</font>";
   check();
   message.style.color ='';
    message.style.fontWeight ='';
    
    
    
  })

//play again listener

againBtn.addEventListener('click', (evt) => {

    let num = Math.floor((Math.random() * 10) +1);
    console.log('New random ' + num);
    guessCount = 0;
    guessInput.value = "";
    guess.focus();
    correct.style.display ="";
    message.textContent = "Start guessing...Again!";
    submitBtn.disabled = false;
    document.getElementById("message").style.background = "";
    document.getElementById("score").innerHTML = 0;
    document.querySelector("#warning").style.visibility = "hidden";
    fillRow();
        })

//end and store score listener

  endBtn.addEventListener('click', (evt) => {

    console.log('End button working');
    if(arr.length > 0){  
    myTable();
    }
    else{
      document.querySelector("#warning").textContent =
      "!Nothing to end \n no game played yet!";
      warning.style.visibility = "visible";
    }
    // Empty score attay
      
      arr.splice(0,arr.length);     

    })
  
//check algorithm

  const check = () => {

   if(guessInput.value == num){
      message.textContent = 'You guessed it right!'
      correct.style.display = "block";
      $('#correct').transition({
          animation:  'flash',
          duration: '2s'      
          })
      
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
      console.log("this is min score" + min);
      
    }
      
      else if (guessCount == maxGuess) {
        message.textContent = 'Sorry, you reached your maximum tries!'
        submitBtn.disabled = true;
       document.getElementById("message").style.background = "yellow";  
     }
   
   
   else if (guessInput.value > num) {
      message.textContent = 'Guess is too high!'
      blinker();
      guessInput.value = "";
      guess.focus();
   }
    else {
      message.textContent = 'Guess is too low!'
      blinker();
      guessInput.value = "";
      guess.focus();
      
      
      
   }

  }
  //storing scores in array
  const storeArray = () => {
    arr.push(guessCount);
    console.log(arr);
  }

  
// pushing scores into table

const myTable = () => {

    let sum = 0;
    arr.forEach( num => {
    sum += num});

    let table = document.getElementById("scoreTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    if (userName.value.trim() !==""){
      cell1.innerHTML = userName.value;
    }
    else{
      cell1.innerHTML = "No name given";
    }
    cell2.innerHTML = sum;
    cell3.innerHTML = myTime();
  
}

//get current time
const myTime = () => {
  // Create a new Date object
let currentTime = new Date();

// Get the current hour, minute, and second
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

// Format the time as HH:MM:SS
let formattedTime = hours + ":" + minutes + ":" + seconds;

// Display the formatted time
return formattedTime;

}

//fill row from 1 to 10, to be x-ed out
const fillRow = () => {
for(i = 1; i <= 10; i++){
  let selecRow = document.getElementById(i);
  selecRow.textContent = i;
}
}

function blinker(){
  let count = 0; // Variable for iterations
  toggleFontColor(); // Start the blinking process
  // Define a function for toggling the font size
  function toggleFontColor(){
      let element = document.getElementById("message");
      if (element) {
          element.style.color = (element.style.color == 'black' ? 'red' : 'black');
          element.style.fontWeight = (element.style.fontWeight == 'normal' ? 'bold' : 'normal');
          count++;
          if (count < 8) {
              setTimeout(toggleFontColor, 400);              
              }                  
      }
    }   
}

//hide name input form
const showHide1 = () => {
  let readMoreDiv = document.querySelector("#nameHide");
  if (readMoreDiv.style.display === "inline") {
          readMoreDiv.style.display = "none";
          btn1.textContent = "Add your name"
  } else {
    readMoreDiv.style.display = "inline";
    btn1.textContent = "Hide this form"
  }
}

let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', showHide1);

  

    
