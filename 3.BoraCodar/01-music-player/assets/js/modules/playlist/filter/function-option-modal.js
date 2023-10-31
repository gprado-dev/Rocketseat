import * as Element from './elements.js'
import * as WindowSize from '../../global/window-size.js'

function clickOptionCustomOrder() {
  Element.filterOptionCustomOrderMobile.classList.add('active')
  Element.filterOptionCustomOrderDesktop.classList.add('active')

  Element.filterOptionTitleMobile.classList.remove('active')
  Element.filterOptionTitleDesktop.classList.remove('active')

  Element.filterOptionArtistMobile.classList.remove('active')
  Element.filterOptionArtistDesktop.classList.remove('active')

  Element.filterButtonDesktop.classList.add('opt1')
  Element.filterButtonDesktop.classList.remove('opt2')
  Element.filterButtonDesktop.classList.remove('opt3')
  Element.filterButtonDesktop.innerText = Element.filterOptionCustomOrderDesktop.innerText
}
function clickOptionTitle() {
  Element.filterOptionTitleMobile.classList.add('active')
  Element.filterOptionTitleDesktop.classList.add('active')

  Element.filterOptionCustomOrderMobile.classList.remove('active')
  Element.filterOptionCustomOrderDesktop.classList.remove('active')

  Element.filterOptionArtistMobile.classList.remove('active')
  Element.filterOptionArtistDesktop.classList.remove('active')

  Element.filterButtonDesktop.classList.remove('opt1')
  Element.filterButtonDesktop.classList.add('opt2')
  Element.filterButtonDesktop.classList.remove('opt3')
  Element.filterButtonDesktop.innerText = Element.filterOptionTitleDesktop.innerText
}
function clickOptionArtist() {
  Element.filterOptionArtistMobile.classList.add('active')
  Element.filterOptionArtistDesktop.classList.add('active')

  Element.filterOptionCustomOrderMobile.classList.remove('active')
  Element.filterOptionCustomOrderDesktop.classList.remove('active')

  Element.filterOptionTitleMobile.classList.remove('active')
  Element.filterOptionTitleDesktop.classList.remove('active')

  Element.filterButtonDesktop.classList.remove('opt1')
  Element.filterButtonDesktop.classList.remove('opt2')
  Element.filterButtonDesktop.classList.add('opt3')
  Element.filterButtonDesktop.innerText = Element.filterOptionArtistDesktop.innerText
}

function selectOptionInModal() {
  // click on Custom Order
  Element.filterOptionCustomOrderMobile.addEventListener("click", () => {
    clickOptionCustomOrder()
  })
  Element.filterOptionCustomOrderDesktop.addEventListener("click", () => {
    clickOptionCustomOrder()
  })

  // click on Title
  Element.filterOptionTitleMobile.addEventListener("click", () => {
    clickOptionTitle()
  })
  Element.filterOptionTitleDesktop.addEventListener("click", () => {
    clickOptionTitle()
  })

  // click on Artist
  Element.filterOptionArtistMobile.addEventListener("click", () => {
    clickOptionArtist()
  })
  Element.filterOptionArtistDesktop.addEventListener("click", () => {
    clickOptionArtist()
  })
}

addEventListener("resize", () => {
  WindowSize.reportWindowSize()
  
  selectOptionInModal()
})

selectOptionInModal()