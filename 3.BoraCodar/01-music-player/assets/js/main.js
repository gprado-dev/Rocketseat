// responsiveness 
let device = document.querySelector('html')
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

  inputSearch.addEventListener("focus", () => {
  inputSearch.placeholder = '';
  });

  inputSearch.addEventListener("blur", () => {
  inputSearch.placeholder = 'Encontrar nesta página';
  });

  console.log(window.innerWidth)