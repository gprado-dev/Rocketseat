// html to variables
const main = document.querySelector(".box")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const inputNumber = document.querySelector("#inputNumber")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// others variables
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener("keydown", resetWithEnter)

// callback function
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleTryClick(event) {
  event.preventDefault()
  
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas.`

    xAttempts++
  }

  else if (Number(inputNumber.value) == NaN ||
            Number(inputNumber.value) == undefined ||
            Number(inputNumber.value) < 0 ||
            Number(inputNumber.value) > 10)
            {
    alert("Digite um número entre 0 e 10.")
  }
  else {
    xAttempts++
  }
  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function resetWithEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}