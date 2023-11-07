// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  delete(user) {
    const filteredEntries = this.entries
    .filter((entry) => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')


    this.update()
  }

  update() {
    this.removeAllTr()
    this.createRow()
    
    this.entries.forEach( user => {
      const row = this.createRow()

      // avatar
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      
      // name
      row.querySelector('.user p').textContent = user.name

      // login
      row.querySelector('.user span').textContent = user.login

      // repositories
      row.querySelector('.repositories').textContent = user.public_repos

      // followers
      row.querySelector('.followers').textContent = user.followers

      // del button
      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')

        if (isOk) {
          this.delete(user)
        }
      }
      
      this.tbody.append(row)
    })

  }

  createRow() {
    const tr = document.createElement('tr')
    
    tr.innerHTML = `
        <!-- user -->
        <td class="user">
          <img src="https://github.com/gprado-dev.png" alt="Imagem de Gustavo Prado">
          <a href="https://github.com/gprado-dev" target="_blank">
            <p>User name</p>
            <span>User ID</span>
          </a>
        </td>

        <!-- repositories -->
        <td class="repositories">76</td>

        <!-- followers -->
        <td class="followers">9589</td>

        <!-- del button -->
        <td class="button"><button class="remove">&times;</button></td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove()
    })
  }
}