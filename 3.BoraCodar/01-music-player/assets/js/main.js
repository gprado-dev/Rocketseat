let device = document.querySelector('html')
let vw = window.innerWidth

if(vw < 700) {
  device.classList.add('mobile')
  device.classList.remove('desktop')
} else {
  device.classList.remove('mobile')
  device.classList.add('desktop')
}