import * as Element from './elements.js'

for (let i = 0; i < Element.playlistTrackContainer[0].childElementCount; i++) {
  Element.playlistTrackContainer[0].children[i].childNodes[1].children[2].innerText = i + 1
}