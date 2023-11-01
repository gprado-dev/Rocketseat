import * as Element from './elements.js'
import * as Global from '../../global/elements.js'

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

export function trackSelection(track, play, pause) {
  let childrens = document.querySelectorAll("#track-list .playlist-track");

  let trackSelected

  for (let i = 0; i < childrens.length; i++) {
    childrens[i].addEventListener("click", function (e) {
          trackSelected = this
      })
  }
  
  track.addEventListener("click", () => {
    track.classList.toggle('selected')

    document.addEventListener("mouseup", (e) => {
      if (!track.contains(e.target)) {
        track.classList.remove('selected')
      }
    })
  });

  play.addEventListener("click", () => {
    track.classList.remove('selected') 
  })

  pause.addEventListener("click", () => {
    track.classList.remove('selected') 
  })
}

trackPlayPause(Element.playlistTrack[0], Element.trackControlerPlay[0], Element.trackControlerPause[0])

trackSelection(Element.playlistTrack[0], Element.trackControlerPlay[0], Element.trackControlerPause[0])

trackSelection(Element.playlistTrack[1], Element.trackControlerPlay[1], Element.trackControlerPause[1])


