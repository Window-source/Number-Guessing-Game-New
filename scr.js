const RandomEasyMode = Math.floor(Math.random() * 10);
const RandomHardMode = Math.floor(Math.random() * 100);
let amount = 0;


document.getElementById("btnEasyMode").onclick = function(){
    while(true){
        let guess = window.prompt("Enter a number from 1 - 10");
        if(guess > RandomEasyMode){
            window.alert("Guess lower");
            amount = amount + 1;
        }
        else if(guess < RandomEasyMode){
            window.alert("Guess higher");
            amount = amount + 1;
        }
        else if(guess == RandomEasyMode){
            window.alert("Congrats You got it!");
            window.alert(`It took you ${amount} guesses`)
            break;
        }
    }
}
document.getElementById("btnHardMode").onclick = function(){
    while(true){
        let guess = window.prompt("Enter a number from 1 - 100");
        if(guess > RandomHardMode){
            window.alert("Guess lower");
            amount = amount + 1;
        }
        else if(guess < RandomHardMode){
            window.alert("Guess higher");
            amount = amount + 1;
        }
        else if(guess == RandomHardMode){
            window.alert("Congrats You got it!");
            window.alert(`It took you ${amount} guesses`)
            break;
        }
    }
}
//btnHardMode