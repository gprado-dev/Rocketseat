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

        for (let i = 0; i < Element.filterOptions[0].length; i++) {
          Element.filterButtonDesktop.classList.remove(`option-${i+1}`)
        }
        
        Element.filterButtonDesktop.classList.add(`option-${i+1}`)

      })
  }
} 

addEventListener("resize", () => {
  WindowSize.reportWindowSize()
  
  clicked()
})

clicked()