
const UserInput = document.getElementById("number")
const button = document.getElementById("btn")
const feedback = document.getElementById("feedback")

const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
const randomNumber  = getRandomNumber(numbers)
let attempts = 0

function getRandomNumber(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

//console.log(getRandomNumber(numbers))

function checkInput(){
    
    const guess = Number(UserInput.value);
    attempts ++

    if(guess < 1 || guess > numbers.length){

        feedback.innerHTML = `You need to guess Between 1 and 100. Attempts so far: ${attempts}`
    }

    else if (guess > randomNumber ){
        feedback.innerHTML = `You need to guess lower Attempts so far: ${attempts}`
    }
    
    else if (guess < randomNumber) {
        feedback.innerHTML = `You need to guess Higer Attempts so far: ${attempts}`

    } else {
        feedback.innerHTML = `Your Guess is right. You Attempted ${attempts} times`

        attempts = 0
        randomNumber  = getRandomNumber(numbers)
        
    }

   UserInput.value = "";
   
}

button.addEventListener("click", checkInput)