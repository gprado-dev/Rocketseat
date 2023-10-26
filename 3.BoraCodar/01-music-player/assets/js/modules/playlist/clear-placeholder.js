export function clearPlaceholder() {
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
} clearPlaceholder()