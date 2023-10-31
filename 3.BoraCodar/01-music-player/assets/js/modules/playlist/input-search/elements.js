export let toggleSearchButton = document.getElementById('button-search')

export let inputWrapper = document.getElementById('input-wrapper')

export let inputSearch = function() {
  // for mobile
  if (window.matchMedia('(max-width: 599px)').matches) {
    return document.getElementsByClassName('input-search mobile')
  }
  
  // for desktop
  else {
    return document.getElementsByClassName('input-search desktop')
  }
}

export let iconSearch = document.getElementById('icon-search')

export let placeholderSearchMessage = function() {
  // for mobile
  if (window.matchMedia('(max-width: 599px)').matches) {
    return placeholderSearchMessage = 'Pesquisar'
  }
  
  // for desktop
  else {
    return placeholderSearchMessage = 'Buscar na playlist'
  }
}



