import * as Element from './elements.js'


function volumeValue(slider, progress, icon) {
  slider.oninput = () => {
    progress.value = slider.value

    if (slider.value == 0) {
      icon.classList.add('mute')
      icon.classList.remove('low')
      icon.classList.remove('medium')
      icon.classList.remove('high')
    }
  
    else if (slider.value > 0 && slider.value < 25) {
      icon.classList.remove('mute')
      icon.classList.add('low')
      icon.classList.remove('medium')
      icon.classList.remove('high')
    }
  
    else if (slider.value >= 25 && slider.value < 75) {
      icon.classList.remove('mute')
      icon.classList.remove('low')
      icon.classList.add('medium')
      icon.classList.remove('high')
    }
  
    else {
      icon.classList.remove('mute')
      icon.classList.remove('low')
      icon.classList.remove('medium')
      icon.classList.add('high')
    }
  }
}

volumeValue(Element.volumeSlider, Element.volumeProgressBar, Element.volumeIcon)