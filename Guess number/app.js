let body = document.querySelector("body");

let submitBtn=document.querySelector("[type='submit'")
let randomNum=Math.floor(Math.random()*100)+1;
let input=0;
submitBtn.addEventListener("click", () => {
    input= document.querySelector("input").value;

    // check that number is valid or not
    let validP=document.querySelector("#valid");
    if(input > 0 && input < 100){
        validP.innerHTML="";
    }
    else{
        validP.innerHTML="Enter a valid number!";
    }
    
    // Checking result
    let resultP= document.querySelector("#result");
    if(input == randomNum){
        submitBtn.style.backgroundColor="green";
        submitBtn.style.transition= "0.3s";
        resultP.innerHTML="Congrats!👌 You are right.<br><button>Play Again</button>";

        // play again function
        let playAgain=document.querySelector("p button");
        playAgain.addEventListener("click",() => {
            randomNum=Math.floor(Math.random()*100)+1;
            playAgain.style.backgroundColor="green";
            submitBtn.style.transition= "0.3s";
            // reset all
            let validP=document.querySelector("#valid");
            validP.innerHTML="..."
            let resultP= document.querySelector("#result");
            resultP.innerHTML="";
            let hintP=document.querySelector(".hint");
            hintP.innerHTML="Click, For hint";
            hintBtn.style.backgroundColor="beige";
            submitBtn.style.backgroundColor="beige";
            submitBtn.style.color="black";
        });
    }
    else if(!(input > 0 && input < 100)){
        resultP.inptext="";
    }
    else {
        submitBtn.style.backgroundColor="red";
        submitBtn.style.color="purple";
        submitBtn.style.transition= "0.3s";
        resultP.innerHTML="Wrong!😯 Please try again.";
        resultP.style.transition= "1s";
    }

    // attempt
    let attempt=document.querySelector("#attempt b");
    let attemptValue=parseInt(attempt.innerHTML);
    attemptValue--;
    attempt.innerHTML=attemptValue;
    let attemptPara=document.querySelector("#attempt");

    // result after full attempt
    if(attemptValue === 0){
       attempt.innerHTML=attemptValue;
       attempt.innerHTML="10";
       setTimeout(()=>{alert("Better luck next time!")});
    }

    // result after guessing the number
    if(resultP.innerHTML=="Congrats!👌 You are right.<br><button>Play Again</button>"){
        attempt.innerHTML=attemptValue;
        attempt.innerHTML="10";
    }
});

// disappear unwanted para
let inptext=document.querySelector("input");
inptext.addEventListener("click", () => {
    let validP=document.querySelector("#valid");
    validP.innerHTML="..."
    let resultP= document.querySelector("#result");
    resultP.innerHTML="";
    let hintP=document.querySelector(".hint");
    hintP.innerHTML="Click. For hint";
    hintBtn.style.backgroundColor="beige";
    submitBtn.style.backgroundColor="beige";
    submitBtn.style.color="black";
});

// Provide hint to user
let hintBtn=document.querySelector("#hint");
hintBtn.addEventListener("click",() => {
    let hintP=document.querySelector(".hint");
    if(input < randomNum && input>0){
        hintP.innerHTML="Think Larger";
    }
    else if(input > randomNum && input<100){
        hintP.innerHTML="Think Smaller";
    }
    else{
        hintP.innerHTML="Unavailable!";
    }
    hintBtn.style.backgroundColor="green";
    hintBtn.style.transition= "0.3s";
});