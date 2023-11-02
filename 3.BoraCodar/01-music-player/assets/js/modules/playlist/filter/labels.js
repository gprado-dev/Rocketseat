import * as Element from './elements.js'

export let labels = ['Ordem personalizada', 'Título', 'Artista', 'Álbum', 'Lançamento', 'Duração']

for (let i = 0; i < Element.filterOptions[0].length; i++) {
  Element.filterOptions[0][i].innerText = labels[i]
}