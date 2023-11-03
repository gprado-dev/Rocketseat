import * as Element from './elements.js'


export function trackPlayPause(track, play, pause) {    
  play.addEventListener("click", () => {
    track.classList.add('on-play')
    track.classList.remove('on-pause')
  });

  pause.addEventListener("click", () => {
    track.classList.remove('on-play')
    track.classList.add('on-pause')
  });
}


trackPlayPause(Element.playlistTrack[0], Element.trackControlerPlay[0], Element.trackControlerPause[0])