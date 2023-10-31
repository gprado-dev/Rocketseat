import * as Element from './elements.js'
import * as WindowSize from '../../global/window-size.js'

function selectOptionInModal() {
  Element.filterOptionCustomOrder.addEventListener("click", () => {
    Element.filterOptionCustomOrder.classList.add('active')
    Element.filterOptionTitle.classList.remove('active')
    Element.filterOptionArtist.classList.remove('active')

    if (window.matchMedia('(min-width: 600px)').matches) {
      return Element.filterButton.innerText = Element.filterOptionCustomOrder.innerText
    }
  })

  Element.filterOptionTitle.addEventListener("click", () => {
    Element.filterOptionTitle.classList.add('active')
    Element.filterOptionCustomOrder.classList.remove('active')
    Element.filterOptionArtist.classList.remove('active')

    if (window.matchMedia('(min-width: 600px)').matches) {
      return Element.filterButton.innerText = Element.filterOptionTitle.innerText
    }
  })

  Element.filterOptionArtist.addEventListener("click", () => {
    Element.filterOptionArtist.classList.add('active')
    Element.filterOptionCustomOrder.classList.remove('active')
    Element.filterOptionTitle.classList.remove('active')

    if (window.matchMedia('(min-width: 600px)').matches) {
      return Element.filterButton.innerText = Element.filterOptionArtist.innerText
    }
  })
}

addEventListener("resize", () => {
  WindowSize.reportWindowSize()
  
  selectOptionInModal()
})

selectOptionInModal()