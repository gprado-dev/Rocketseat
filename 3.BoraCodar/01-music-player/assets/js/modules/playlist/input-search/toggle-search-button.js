import * as Element from './elements.js'


export function toggleSearchButtonOnClick() {
  Element.toggleSearchButton.addEventListener("click", () => {

    Element.toggleSearchButton.classList.toggle('invisible');
    Element.iconSearch.classList.toggle('invisible')
  })
}

export function toggleSearchButtonOnBlur() {
  if (Element.inputSearch.value =="") {
    Element.inputSearch.addEventListener("blur", () => {
      
      Element.iconSearch.classList.toggle('invisible')
      Element.toggleSearchButton.classList.toggle('invisible');
    });
  }
}

toggleSearchButtonOnClick()
toggleSearchButtonOnBlur()