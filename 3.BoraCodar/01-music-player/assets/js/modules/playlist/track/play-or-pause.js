import * as Element from './elements.js'

/* FOR CONSULT
let play = childrens[0].children[0].children[0]
let pause = childrens[0].children[0].children[1]
let trackOptions = childrens[0].children[1].children[5]
*/

function controlerCliked(child1, child2) {
  let controlerSelected
  let trackSelected

  for (let i = 0; i < Element.childrens.length; i++) {
    Element.childrens[i].children[child1].children[child2].addEventListener("click", function (e) {
      controlerSelected = this;
      trackSelected = controlerSelected.parentElement.parentElement

      trackSelected.classList.toggle('selected')

      // play
      if (child2 == 0) {
        for (let i = 0; i < Element.childrens.length; i++) {
          Element.playlistTrack[i].classList.remove('on-play')
          Element.playlistTrack[i].classList.remove('on-pause')
        }

        trackSelected.classList.add('on-play')
        trackSelected.classList.remove('on-pause')
      }

      // pause
      else if (child2 == 1) {
        trackSelected.classList.remove('on-play')
        trackSelected.classList.add('on-pause')
      }
    })
  }
}
/* play */ controlerCliked(0, 0)
/* pause */ controlerCliked(0, 1)