import * as WindowSize from '../../global/window-size.js'

export let filterButton, modalOverlay, filterModal, filterOptionCustomOrder, filterOptionTitle, filterOptionArtist


function htmlPicker() {
  // for mobile
  if (WindowSize.reportWindowSize() < 600) {
    filterButton = document.getElementsByClassName('playlistControlers-filter mobile')[0]
    modalOverlay = document.getElementsByClassName('modal-overlay mobile')[0]
    filterModal = document.getElementsByClassName('filter-nav mobile')[0]
    
    filterOptionCustomOrder = document.querySelector('.filter-nav-option.mobile[value="custom-order"]')
    filterOptionTitle = document.querySelector('.filter-nav-option.mobile[value="title"]')
    filterOptionArtist = document.querySelector('.filter-nav-option.mobile[value="artist"]')
  }

  // for desktop
  else {
    filterButton = document.getElementsByClassName('playlistControlers-filter desktop')[0]
    modalOverlay = document.getElementsByClassName('modal-overlay desktop')[0]
    filterModal = document.getElementsByClassName('filter-nav desktop')[0]
    
    filterOptionCustomOrder = document.querySelector('.filter-nav-option.desktop[value="custom-order"]')
    filterOptionTitle = document.querySelector('.filter-nav-option.desktop[value="title"]')
    filterOptionArtist = document.querySelector('.filter-nav-option.desktop[value="artist"]')
  }
}
htmlPicker()


addEventListener("resize", () => {
  WindowSize.reportWindowSize()
  
  htmlPicker()
})