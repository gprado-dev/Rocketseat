import * as Element from './elements.js'
import * as WindowSize from '../../global/window-size.js'

function toggleModal() {
  Element.filterButton.addEventListener("click", () => {
    Element.filterButton.classList.toggle('active')
    Element.filterModal.classList.toggle('open')

    Element.modalOverlay.classList.toggle('invisible')
  });

  Element.modalOverlay.addEventListener("click", () => {
    Element.filterButton.classList.remove('active')
    Element.filterModal.classList.remove('open')

    Element.modalOverlay.classList.add('invisible')
  });
}

addEventListener("resize", () => {
  WindowSize.reportWindowSize()
  
  toggleModal()
})

toggleModal()