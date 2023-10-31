import * as Element from './elements.js'

Element.inputSearch

export function toggleSearchButtonOnClick() {
  Element.toggleSearchButton.addEventListener("click", () => {

    Element.toggleSearchButton.classList.add('invisible');
    Element.iconSearch.classList.remove('invisible')
    Element.inputSearch()[0].classList.add('open')
  })
}

export function toggleSearchButtonOnBlur() {

    Element.inputSearch()[0].addEventListener("blur", () => {

      if(Object.keys(Element.inputSearch()[0].value).length == 0) {
        Element.iconSearch.classList.add('invisible')
      Element.toggleSearchButton.classList.remove('invisible');
      Element.inputSearch()[0].classList.remove('open')  
      }
    })
}


toggleSearchButtonOnClick()
toggleSearchButtonOnBlur()