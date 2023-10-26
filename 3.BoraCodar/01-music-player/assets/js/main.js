// responsiveness 
let device = document.querySelector('html')
let body = document.querySelector('body')
let vw = window.matchMedia('(max-width: 700px)').matches

if(vw) {
  device.classList.add('mobile')
  device.classList.remove('desktop')
} else {
  device.classList.remove('mobile')
  device.classList.add('desktop')
}


// clear placeholder inputs when focus
  let inputSearch = document.getElementById('search')
  let placeholderMessage = 'Buscar na playlist'

  inputSearch.placeholder = placeholderMessage;

  if (device.classList[0] == 'desktop') {
    inputSearch.addEventListener("focus", () => {
    inputSearch.placeholder = '';
    });

    inputSearch.addEventListener("blur", () => {
    inputSearch.placeholder = placeholderMessage;
    });
  }


  // toggle visibility search button
  // let buttonSearch = document.getElementById('button-search')
  // let iconSearch = document.getElementById('icon-search')

  // buttonSearch.addEventListener("click", () => {
  //   buttonSearch.classList.toggle('visibility-off')

  //   inputSearch.classList.toggle('visibility-off')
  //   inputSearch.classList.toggle('visibility-on')

  //   iconSearch.classList.toggle('visibility-off')

  //   inputSearch.focus()
  // })

  // if  (inputSearch.classList.contains('visibility-on')) {
  //   console.log('abriu')
  // }





  // if (!inputSearch.focus()) {
  //   console.log('sem foco')
  // }




  console.log(window.innerWidth)