import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gprado-dev.png" alt="" />
    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Prado</strong>
              <time
                title='11 de maio às 08:13' 
                dateTime='2022-05-11 08:13:30'
              >
                Publicado há 1h
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={16} />
            Aplaudir<span>20</span>
          </button>
        </footer>

      </div>

    
    </div>
  )
}