import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/beadobruski.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bea Dobruski</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
