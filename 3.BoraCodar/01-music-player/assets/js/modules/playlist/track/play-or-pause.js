import * as Element from './elements.js'


export function trackPlayOrPause(group, track, play, pause) {    
  let elSelected


  /* OLD FUNCTION
  play.addEventListener("click", () => {
    track.classList.add('on-play')
    track.classList.remove('on-pause')
  });

  pause.addEventListener("click", () => {
    track.classList.remove('on-play')
    track.classList.add('on-pause')
  });
  */
}


trackPlayOrPause(Element.playlistTrack[0], Element.trackControlerPlay[0], Element.trackControlerPause[0])