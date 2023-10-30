import * as Element from './elements.js'

export function toggleModal() {
  Element.filterButton()[0].addEventListener("click", () => {
    Element.filterButton()[0].classList.toggle('active')
    Element.filterModal()[0].classList.toggle('open')

    Element.modalOverlay()[0].classList.remove('invisible')
  });

  Element.modalOverlay()[0].addEventListener("click", () => {
    Element.filterButton()[0].classList.remove('active')
    Element.filterModal()[0].classList.remove('open')

    Element.modalOverlay()[0].classList.add('invisible')
  });
}

toggleModal()