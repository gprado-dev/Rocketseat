import { inputSearch } from './clear-placeholder.js'

export function toggleSearchButton() {
  let toggleSearchButton = document.getElementById('button-search')

  toggleSearchButton.addEventListener("click", () => {
    inputSearch.classList.toggle('search-open');
    inputSearch.classList.toggle('search-close');
    //   setTimeout(() => {
    //     inputSearch.classList.toggle('search-hidden');
    //   },400)
    });
} toggleSearchButton()