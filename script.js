let generatedPin = document.querySelector(".generated-pin");
let generateBtn = document.querySelector(".generate-btn");

generateBtn.addEventListener("click", () => {
    let decimalPin = Math.random() * 10000;
    let pinNumber = Math.round(decimalPin);
    // console.log(pinNumber);
    if(pinNumber > 999)
    generatedPin.value = pinNumber;
    document.querySelector(".pin-input").value = '';
    notifyNone();
})

let enable = true;
function appendNumber(number){
    let pinInput = document.querySelector(".pin-input");
    let realNumber = parseInt(number);
    pinInput.value += realNumber;
    // if(enable == true){
    //     let realNumber = parseInt(number);
    //     console.log(typeof(realNumber))
    //     pinInput.value += realNumber;
    //     if(pinInput.value.length >= 4){
    //         enable = false;
    //     }
    // }
}
function notifyNone(){
    document.getElementsByClassName("notify")[0].style.display = "none";
    document.getElementsByClassName("notify")[1].style.display = "none";
}
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    document.querySelector(".pin-input").value = '';
    // enable = true;
    notifyNone();
})

let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
    let existedPin = document.querySelector(".generated-pin").value;
    let userInput = document.querySelector(".pin-input").value;
    if(existedPin == userInput){
        document.getElementsByClassName("notify")[1].style.display = "block";
        document.getElementsByClassName("notify")[0].style.display = "none"
    }
    else{
        document.getElementsByClassName("notify")[0].style.display = "block"
        document.getElementsByClassName("notify")[1].style.display = "none"
    }
})

let deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
    let input = document.querySelector(".pin-input").value;
    let deletedNumber = input.slice(0,-1);
    document.querySelector(".pin-input").value = deletedNumber;
})