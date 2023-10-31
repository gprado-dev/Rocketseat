import * as Element from './elements.js'


export function clearPlaceholder(input, message) {    
  // for mobile
  if (window.matchMedia('(max-width: 599px)').matches) {
    return input.placeholder = message;
  }
  
  // for desktop
  else if (window.matchMedia('(min-width: 600px)').matches) {
    input.placeholder = message

    input.addEventListener("focus", () => {
      input.placeholder = message;
    });

    input.addEventListener("blur", () => {
      input.placeholder = message;
    });
  }
} 

  clearPlaceholder(Element.inputSearch()[0], Element.placeholderSearchMessage())