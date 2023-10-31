export function reportWindowSize() {  
  let widthOutput = window.innerWidth;
  
  function updateOnResize() {
    widthOutput = window.innerWidth;
  }

  window.onresize = updateOnResize;

  // console.log(Number(widthOutput.textContent))
  return Number(widthOutput)
}