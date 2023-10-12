/* ---------------------------------------------
VARIABLES //////////////////////////////////////
--------------------------------------------- */
/* /// form /// */
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* /// modal -> object literal /// */
const Modal = {
  // selectors
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title'),
  btnClose: document.querySelector('.modal .btn-close'),

  //functions
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

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

  // process data
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  // print result
  Modal.message.innerText = message
  Modal.open()
}

/* /// calculate IMC /// */
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

/* /// modal close button /// */
Modal.btnClose.onclick = () => {
  Modal.close()
}


/* ---------------------------------------------
DRAFTS /////////////////////////////////////////
--------------------------------------------- */