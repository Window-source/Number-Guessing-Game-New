function EasyRoll(){
    RandomEasyMode = Math.floor(Math.random() * 10 + 1);
    console.log(RandomEasyMode)
}
function HardRoll(){
    RandomHardMode = Math.floor(Math.random() * 100 + 1);
    console.log(RandomHardMode)
}
let CoinLabel = document.getElementById("coinlabel");
let Coins = 0;
let amount = 0;



document.getElementById("btnEasyMode").onclick = function(){
    EasyRoll()
    while(true){
        let guess = Number(window.prompt("Enter a number from 1 - 10"));

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
            window.alert(`It took you ${amount} guesses`);

            if (amount < 5){
                //!Coins
                Coins ++;
                window.alert(`You gained 1 Coins`)
                CoinLabel.innerHTML = `Coins: ${Coins}`
            }
            else{
                window.alert("No coins gained")
            }
            console.log(`Before reset: ${amount}`)
            amount = amount - amount
            console.log(`After reset: ${amount}`)
            break;
        }
    }
}
document.getElementById("btnHardMode").onclick = function(){
    HardRoll()
    while(true){
        let guess = Number(window.prompt("Enter a number from 1 - 100"));

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
            window.alert(`It took you ${amount} guesses`);

            if (amount < 5){
                //!Coins
                Coins ++;
                window.alert(`You gained 1 Coins`)
                CoinLabel.innerHTML = `Coins: ${Coins}`
            }
            else{
                window.alert("No coins gained")
            }
            console.log(`Before reset: ${amount}`)
            amount = amount - amount
            console.log(`After reset: ${amount}`)
            break;
        }
    }
}


