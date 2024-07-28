let guess;
const min =1;
const max=50;
let run = true;
let attempt =0;
let answer = Math.floor(Math.random()*(max-min+1))+min;

while(run){
    guess = window.prompt(`Enter a number between 1- 50`) 
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert(`Enter a valid number`)
    }
    else if(guess < min || guess >max){
        window.alert(`Enter the number between 1 to 50`)
    }
    else{
        attempt++;
        if(guess > answer){
            window.alert(`Too high guess a bit lower`)
        }
        else if(guess<answer){
            window.alert(`Too low guess a bit high`)
        }
        else{
            window.alert(`HURRAY !!!!!! You guessed the Number ${answer}...... total attempts : ${attempt}`)
            run =false; 
        }
    }
    
}