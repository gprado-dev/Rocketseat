import * as Element from './elements.js'

export function selectOptionInModal() {
  Element.filterOptionTitle.addEventListener("click", () => {
    Element.filterOptionTitle.classList.add('active')
    Element.filterOptionArtist.classList.remove('active')
  })

  Element.filterOptionArtist.addEventListener("click", () => {
    Element.filterOptionTitle.classList.remove('active')
    Element.filterOptionArtist.classList.add('active')
  })
}

selectOptionInModal()