import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './Post.jsx'


export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          <Post 
            author="Gustavo Prado"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum optio magnam dignissimos autem. Eum non odio voluptate error assumenda ab, eveniet voluptatem! Vel tempore non ipsum veniam ea iusto! Beatae."
          />

          <Post 
            author="Herison Pereira"
            content="Um outro conteúdo aqui."
          />
        </main>
      </div>
      
    </>
  )
}