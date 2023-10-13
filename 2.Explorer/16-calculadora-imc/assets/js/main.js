/* ---------------------------------------------
IMPORTS ////////////////////////////////////////
--------------------------------------------- */
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, calculateIMC, groupIMC } from './utils.js'


/* ---------------------------------------------
VARIABLES //////////////////////////////////////
--------------------------------------------- */
/* /// form /// */
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


/* ---------------------------------------------
FUNCTIONS //////////////////////////////////////
--------------------------------------------- */
/* /// form submit btn & open modal /// */
form.onsubmit = (event) => {
  // stop refresh page
  event.preventDefault()
  
  // capture datas
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
  
  // input validation
  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  // process data
  const result = calculateIMC(weight, height)
  const resultGroupIMC = groupIMC(result)
  displayResultMessage(result, resultGroupIMC)
}

/* /// close alert if a key is pressed on inputs /// */
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

/* /// print result /// */
function displayResultMessage(result, resultGroupIMC) {
    // process data
  const messageTitle = `Seu IMC é de ${result}`
  const messageParagraph = `Grupo: ${resultGroupIMC}`

  // print result
  Modal.title.innerText = messageTitle
  Modal.paragraph.innerText = messageParagraph
  Modal.open()
}