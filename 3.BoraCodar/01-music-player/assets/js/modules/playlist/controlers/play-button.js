import * as Element from './elements.js'
import * as Global from '../../global/elements.js'

export function playMusic(button) {    
  button.addEventListener("click", () => {
    Global.bodyTag.classList.add('on-play')
  });
}

playMusic(Element.playButtonPlaylist[0])