import * as Element from './elements.js'
import * as WindowSize from '../../global/window-size.js'

function clicked() {
  let optionSelected
  
  for (let i = 0; i < Element.filterOptions[0].length; i++) {
      Element.filterOptions[0][i].addEventListener("click", function (e) {
        optionSelected = this

        Element.filterButtonDesktop.innerText = optionSelected.innerText

        for (let i = 0; i < Element.filterOptions[0].length; i++) {
          Element.filterOptions[0][i].classList.remove('active')
        }

        optionSelected.classList.toggle('active')

        Element.filterButtonDesktop.style.transition = 'all 100ms'
      })
  }
} 

addEventListener("resize", () => {
  WindowSize.reportWindowSize()
  
  clicked()
})

clicked()