export let filterButton = function() {
// for mobile
  if (window.matchMedia('(max-width: 599px)').matches) {
    return document.getElementsByClassName('playlistControlers-filter mobile')
  }

// for desktop
  if (window.matchMedia('(min-width: 600px)').matches) {
    return document.getElementsByClassName('playlistControlers-filter desktop')
  }
}

export let modalOverlay = function() {
  // for mobile
    if (window.matchMedia('(max-width: 599px)').matches) {
      return document.getElementsByClassName('modal-overlay mobile')
    }
  
  // for desktop
    if (window.matchMedia('(min-width: 600px)').matches) {
      return document.getElementsByClassName('modal-overlay desktop')
    }
}

export let filterModal = function() {
  // for mobile
    if (window.matchMedia('(max-width: 599px)').matches) {
      return document.getElementsByClassName('filter-nav mobile')
    }
  
  // for desktop
    if (window.matchMedia('(min-width: 600px)').matches) {
      return document.getElementsByClassName('filter-nav desktop')
    }
}

export let filterOptionCustomOrder = function() {
  // for mobile
    if (window.matchMedia('(max-width: 599px)').matches) {
      return document.querySelector('.filter-nav-option.mobile[value="custom-order"]')
    }
  
  // for desktop
    if (window.matchMedia('(min-width: 600px)').matches) {
      return document.querySelector('.filter-nav-option.desktop[value="custom-order"]')
    }
}

export let filterOptionTitle = function() {
  // for mobile
    if (window.matchMedia('(max-width: 599px)').matches) {
      return document.querySelector('.filter-nav-option.mobile[value="title"]')
    }
  
  // for desktop
    if (window.matchMedia('(min-width: 600px)').matches) {
      return document.querySelector('.filter-nav-option.desktop[value="title"]')
    }
}

export let filterOptionArtist = function() {
  // for mobile
    if (window.matchMedia('(max-width: 599px)').matches) {
      return document.querySelector('.filter-nav-option.mobile[value="artist"]')
    }
  
  // for desktop
    if (window.matchMedia('(min-width: 600px)').matches) {
      return document.querySelector('.filter-nav-option.desktop[value="artist"]')
    }
}