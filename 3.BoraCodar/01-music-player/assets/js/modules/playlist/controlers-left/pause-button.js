import * as Element from './elements.js'
import * as Global from '../../global/elements.js'

export function playMusic(button) {    
  button.addEventListener("click", () => {
    Global.bodyTag.classList.remove('on-play')
  });
}

playMusic(Element.pauseButtonPlaylist[0])
