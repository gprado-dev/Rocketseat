import * as Element from './elements.js'

export function selectOptionInModal() {
  Element.filterOptionCustomOrder().addEventListener("click", () => {
    Element.filterOptionCustomOrder().classList.add('active')
    Element.filterOptionTitle().classList.remove('active')
    Element.filterOptionArtist().classList.remove('active')

    if (window.matchMedia('(min-width: 600px)').matches) {
      return Element.filterButton()[0].innerText = Element.filterOptionCustomOrder().innerText
    }
  })

  Element.filterOptionTitle().addEventListener("click", () => {
    Element.filterOptionTitle().classList.add('active')
    Element.filterOptionCustomOrder().classList.remove('active')
    Element.filterOptionArtist().classList.remove('active')

    if (window.matchMedia('(min-width: 600px)').matches) {
      return Element.filterButton()[0].innerText = Element.filterOptionTitle().innerText
    }
  })

  Element.filterOptionArtist().addEventListener("click", () => {
    Element.filterOptionArtist().classList.add('active')
    Element.filterOptionCustomOrder().classList.remove('active')
    Element.filterOptionTitle().classList.remove('active')

    if (window.matchMedia('(min-width: 600px)').matches) {
      return Element.filterButton()[0].innerText = Element.filterOptionArtist().innerText
    }
  })
}

selectOptionInModal()