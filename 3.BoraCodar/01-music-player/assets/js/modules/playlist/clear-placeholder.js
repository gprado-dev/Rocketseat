export function clearPlaceholder() {
  let inputSearch = document.getElementById('search')
  let placeholderMessage = 'Buscar na playlist'

  inputSearch.placeholder = placeholderMessage;

  if (window.matchMedia('(min-width: 600px)').matches) {
    inputSearch.addEventListener("focus", () => {
    inputSearch.placeholder = '';
    });

    inputSearch.addEventListener("blur", () => {
    inputSearch.placeholder = placeholderMessage;
    });
  }
} clearPlaceholder()