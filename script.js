let result = document.querySelector(".result");
let number = document.querySelector("#number")
let resultDiv = document.querySelector(".result-div")
let play = document.querySelector(".playAgain")
let p =document.querySelector("result-div > p");
//comp
var compRock = document.querySelector("#compRock");
var compPaper = document.querySelector(".compPaper");
var compScissor = document.querySelector(".compScissor");
let compContainer = document.querySelector(".compChoices");
let compChoices = document.querySelectorAll(".comp");
console.log(compChoices)


//user

let container = document.querySelector("main")
var userRock = document.querySelector(".r1");
var userPaper = document.querySelector(".p1");
var userScissor = document.querySelector(".s1");
// var userScore  = 0

let score1 = document.querySelector(".userScoreDiv").children[1];
let score2 = document.querySelector(".compScoreDiv").children[1];
console.log(score1)

let compScore  = 0;
let userScore = 0;
let output = 0;



setInterval(()=>{
    
    if (score1.textContent >= number.value){
        result.textContent = "User Has Won"
    }

    if(score2.textContent >= number.value){
        result.textContent = "User Has Lost"
    }

    if(score1.textContent >= number.value || score2.textContent >= number.value){
        userPaper.classList.remove("userPaper");
        userRock.classList.remove("userRock");
        userScissor.classList.remove("userScissor");
        play.style.display = "inline-block"
        number.style.display = "unset"
    }
    
},100)




container.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("playAgain")){
        userPaper.style.display = "unset"
        userRock.style.display = "unset"
        userScissor.style.display = "unset"
        compContainer.style.display = "none"
        result.textContent = "";

        score1.textContent = 0;
        score2.textContent = 0;
        userPaper.classList.add("userPaper");
        userRock.classList.add("userRock");
        userScissor.classList.add("userScissor");
        play.style.display = "none"
        console.log(number.value)
        console.log(1)
    }
    console.log(compScore)
    console.log(userScore)


    if(e.target.parentElement.classList.contains("userRock")){
        // userPaper.style.display = "none"
        // userScissor.style.display = "none"
        compContainer.style.display = "flex"
        resultDiv.style.display ="unset"

        



        output = Math.floor(Math.random() * 3)
        console.log("output" + output)

        compChoices.forEach((a, index)=>{
            if (index === output){
                a.style.display = "unset"
            }

            else{
                a.style.display = "none"
            }
        })

        if (output === 0){
            result.textContent = "Draw"
            console.log(result)

        }

        else if(output === 1){
            result.textContent = "Lose"
            console.log(result)

            score2.textContent++
        }

        else{
            result.textContent = "Win"
            console.log(result)
            score1.textContent++
            
        }
    }

    if(e.target.parentElement.classList.contains("userPaper")){
        // userRock.style.display = "none"
        // userScissor.style.display = "none"
        compContainer.style.display = "flex"
        resultDiv.style.display ="unset"





        output = Math.floor(Math.random() * 3)
        console.log("output" + output)

        compChoices.forEach((a, index)=>{
            if (index === output){
                a.style.display = "unset"
            }

            else{
                a.style.display = "none"
            }
        })

        if (output === 0){
            result.textContent = "Win"
            console.log(result)
            score1.textContent++

        }

        else if(output === 1){
            result.textContent = "Draw"
            console.log(result)


        }

        else{
            result.textContent = "Lose"
            console.log(result)
            score2.textContent++
            
        }
    }

    if(e.target.parentElement.classList.contains("userScissor")){
        // userPaper.style.display = "none"
        // userRock.style.display = "none"
        compContainer.style.display = "flex"
        resultDiv.style.display ="unset"

        



        output = Math.floor(Math.random() * 3)
        console.log("output" + output)

        compChoices.forEach((a, index)=>{
            if (index === output){
                a.style.display = "unset"
            }

            else{
                a.style.display = "none"
            }
        })

        if (output === 0){
            result.textContent = "Lose"
            console.log(result)
            score2.textContent++

        }

        else if(output === 1){
            result.textContent = "Win"
            console.log(result)

            score1.textContent++
        }

        else{
            result.textContent = "Draw"
            console.log(result)

            
        }
    }



})
// document.querySelector(".userScore").textContent = userScore

// userRock.addEventListener("click", function(){return "Rock"})
// userPaper.addEventListener("click", function(){return "Paper"})
// userScissor.addEventListener("click", function(){return "Scissors"})

// function compChoice(){
//     var randomMath = Math.floor(Math.random() * 3);//0-2
//     if (randomMath === 0){return "Rock"};
//     if(randomMath === 1){return "Paper"};
//     if (randomMath === 2){return "scissors"}

// }
// console.log(compChoice());