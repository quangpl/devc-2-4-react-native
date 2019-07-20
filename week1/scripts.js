let btnGuess = document.getElementById("btn-guess");
let guess = document.getElementById("guess");
let low = document.getElementById("low");
let pass = document.getElementById("pass");
pass.innerText = JSON.parse(localStorage.getItem("pass"));
let high = document.getElementById("high");
let count = 10;
let passGuess = new Array();
const LIMIT = 10;
let limitCount = document.getElementById("limit-count");
const MIN = 1;
const MAX = 10;
let compare = getRandom(MIN, MAX);
console.log(compare)
limitCount.innerText = 10;
function getRandom(a, b) {
    return Math.floor(a + Math.random() * (b - a));
}
function onCLickGuess() {
    if(!guess.value){
        Swal.fire({
            type: 'error',
            title: 'Empty',
            text: 'Your input is not valid',
        })
        return false;
    }
    if (guess.value < compare) {
        $("#low").removeClass("d-none");
        disableControl();
    }
    else if (guess.value > compare) {
        console.log('hidh')
        $("#high").removeClass("d-none");
        disableControl();
    }
    else {
        Swal.fire({
            type: 'success',
            title: 'Congratulations',
            text: `You guessed correctly. You have been win after ${LIMIT - count + 1} times.`,
        })
        resetGame();
        return true;
    }
    savePass(guess.value);
    count--;
    limitCount.innerText = count;
    if (count === 0) {
       
        Swal.fire({
            title: 'You lose',
            text: `You have 0 guess left, true number is ${compare} . Try again.`,
            type: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Try again'
        }).then((result) => {
            if (result.value) {
                resetGame();
            }
        })
        return false;
    }
    guess.value = "";
   
}
function onClickTry() {
    console.log('tr')
    $("#low").addClass("d-none");
    $("#high").addClass("d-none");
    enableControl();
}

function disableControl(){
    guess.disabled = true;
    btnGuess.disabled = true;
}

function enableControl(){
    guess.disabled = false;
    btnGuess.disabled = false;
}

function resetGame(){
    guess.disabled = false;
    btnGuess.disabled = false;
    count = LIMIT;
    limitCount.innerText = count;
    $("#low").addClass("d-none");
    $("#high").addClass("d-none");
    compare = getRandom(MIN, MAX);
    guess.value = "";
    localStorage.setItem("pass", JSON.stringify([]))
}

function savePass(val){
    let passInput = JSON.parse(localStorage.getItem("pass"));
    if (!passInput){
        passInput = new Array();
    }
    console.log(passInput)
    passInput.unshift(val)
    pass.innerText = passInput;
    localStorage.setItem("pass", JSON.stringify(passInput))
}

