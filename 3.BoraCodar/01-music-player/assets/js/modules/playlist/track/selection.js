import * as Element from './elements.js'

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
SelectTrackOnClick(Element.childrens)