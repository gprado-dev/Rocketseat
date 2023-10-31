import * as WindowSize from '../../global/window-size.js'

export let filterButton, filterButtonDesktop, modalOverlay, filterModal, filterOptionCustomOrderMobile, filterOptionTitleMobile, filterOptionArtistMobile, filterOptionCustomOrderDesktop, filterOptionTitleDesktop, filterOptionArtistDesktop


function htmlPicker() {
  // for mobile
  if (WindowSize.reportWindowSize() < 600) {
    filterButton = document.getElementsByClassName('playlistControlers-filter mobile')[0]
    filterButtonDesktop = document.getElementsByClassName('playlistControlers-filter desktop')[0]
    modalOverlay = document.getElementsByClassName('modal-overlay mobile')[0]
    filterModal = document.getElementsByClassName('filter-nav mobile')[0]
  }

  // for desktop
  else {
    filterButton = document.getElementsByClassName('playlistControlers-filter desktop')[0]
    filterButtonDesktop = document.getElementsByClassName('playlistControlers-filter desktop')[0]
    modalOverlay = document.getElementsByClassName('modal-overlay desktop')[0]
    filterModal = document.getElementsByClassName('filter-nav desktop')[0]
  }

  // for mobile
  filterOptionCustomOrderMobile = document.querySelector('.filter-nav-option.mobile[value="custom-order"]')
  filterOptionTitleMobile = document.querySelector('.filter-nav-option.mobile[value="title"]')
  filterOptionArtistMobile = document.querySelector('.filter-nav-option.mobile[value="artist"]')

  // for desktop
  filterOptionCustomOrderDesktop = document.querySelector('.filter-nav-option.desktop[value="custom-order"]')
  filterOptionTitleDesktop = document.querySelector('.filter-nav-option.desktop[value="title"]')
  filterOptionArtistDesktop = document.querySelector('.filter-nav-option.desktop[value="artist"]')
}
htmlPicker()


addEventListener("resize", () => {
  WindowSize.reportWindowSize()
  
  htmlPicker()
})