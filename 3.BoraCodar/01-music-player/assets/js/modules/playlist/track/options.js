import * as Element from './elements.js'

/* FOR CONSULT
let trackOptions = childrens[0].children[1].children[5]
*/

function optionsCliked() {
  let controlerSelected
  let trackSelected

  for (let i = 0; i < Element.childrens.length; i++) {
    Element.childrens[i].children[1].children[5].addEventListener("click", function (e) {
      controlerSelected = this;
      trackSelected = controlerSelected.parentElement.parentElement

      trackSelected.classList.add('selected')
      trackSelected.classList.toggle('selected')
    })
  }
}
optionsCliked()