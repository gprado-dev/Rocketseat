import * as Element from './elements.js'

export function playMusic(button) {    
  button.addEventListener("click", () => {
    button.classList.toggle('on')
  });
}

playMusic(Element.randomButtonPlaylist[0])