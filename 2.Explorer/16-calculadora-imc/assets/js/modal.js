/* ---------------------------------------------
VARIABLES //////////////////////////////////////
--------------------------------------------- */
export const Modal = {
  // selectors
  wrapper: document.querySelector('.modal-wrapper'),
  card: document.querySelector('.modal'),
  title: document.querySelector('.modal .title'),
  paragraph: document.querySelector('.modal .paragraph'),
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
/* /// close modal with click on button /// */
Modal.btnClose.onclick = () => {
  Modal.close()
}

/* /// close modal with keydown esc /// */
window.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    Modal.close()
  }
})

// other expression type
// window.addEventListener('keydown', keyEsc)

// function keyEsc(event) {
//   if(event.key === 'Escape') {
//     Modal.close()
//   }
// }