import * as Element from './elements.js'


export function clearPlaceholder(input, message) {    
    // for desktop
    if (window.matchMedia('(min-width: 600px)').matches) {
      input.placeholder = message

      input.addEventListener("focus", () => {
        input.placeholder = message;
      });
  
      input.addEventListener("blur", () => {
        input.placeholder = message;
      });
    }
  } 

  clearPlaceholder(Element.inputSearch, Element.placeholderSearchMessage)