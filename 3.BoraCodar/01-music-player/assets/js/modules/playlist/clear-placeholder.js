export let inputSearch = document.getElementById('search')

export function clearPlaceholder() {
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