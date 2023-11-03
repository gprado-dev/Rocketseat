import * as Element from './elements.js'

let childrens = document.querySelectorAll("#track-list .playlist-track");

/* FOR CONSULT
let play = childrens[0].children[0].children[0]
let pause = childrens[0].children[0].children[1]
let trackOptions = childrens[0].children[1].children[5]
*/

function controlerCliked(child1, child2) {
  let controlerSelected
  let trackSelected

  for (let i = 0; i < childrens.length; i++) {
    childrens[i].children[child1].children[child2].addEventListener("click", function (e) {
      controlerSelected = this;
      trackSelected = controlerSelected.parentElement.parentElement

      trackSelected.classList.toggle('selected')
    })
  }
}
/* play */ controlerCliked(0, 0)
/* pause */ controlerCliked(0, 1)

function optionsCliked() {
  let controlerSelected
  let trackSelected

  for (let i = 0; i < childrens.length; i++) {
    childrens[i].children[1].children[5].addEventListener("click", function (e) {
      controlerSelected = this;
      trackSelected = controlerSelected.parentElement.parentElement

      trackSelected.classList.add('selected')
      trackSelected.classList.toggle('selected')
    })
  }
}
optionsCliked()


export function SelectTrackOnClick(group) {
  let elSelected
 
  for (let i = 0; i < group.length; i++) {
    group[i].addEventListener("click", function (e) {
      elSelected = this;

      elSelected.classList.toggle('selected');

      document.addEventListener("mouseup", (e) => {
        if (!elSelected.contains(e.target)) {
          elSelected.classList.remove('selected')
        }
      });
    });
  };
}
SelectTrackOnClick(childrens)