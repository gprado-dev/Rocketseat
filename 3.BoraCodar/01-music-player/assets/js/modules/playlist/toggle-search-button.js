import * as Element from './elements.js'


export function toggleSearchButtonOnClick() {
  Element.toggleSearchButton.addEventListener("click", () => {
    Element.inputWrapper.classList.toggle('invisible')

    Element.toggleSearchButton.classList.toggle('invisible');

    setTimeout(() => {
      Element.iconSearch.classList.toggle('invisible')
    
      Element.inputSearch.classList.toggle('search-close');
      Element.inputSearch.classList.toggle('search-open');

      Element.inputSearch.focus()
    }, 1
  )
    
    });
  }
export function toggleSearchButtonOnBlur() {
  if (Element.inputSearch.value =="") {
    Element.inputSearch.addEventListener("blur", () => {
      setTimeout(() => {
        Element.inputWrapper.classList.toggle('invisible')
        },
        500
      )
      
      Element.iconSearch.classList.toggle('invisible')

      Element.inputSearch.classList.toggle('search-close');
      Element.inputSearch.classList.toggle('search-open');

      Element.toggleSearchButton.classList.toggle('invisible');
      });
    }
  }

toggleSearchButtonOnClick()
toggleSearchButtonOnBlur()