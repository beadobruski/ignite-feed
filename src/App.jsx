import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/beadobruski.png',
      name: 'Bea Dobruski',
      role: 'Student @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: ' 👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-20 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: ' 👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-24 13:00:00'),
  },
];

// iteração
// repetição... react;
// sempre usar o map

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* percorrer os posts =>  */}
          {/* o metódo forEach não tem nenhum retorno (nada exibido em tela),
          então nesse caso, não FUNCIONARIA usar o forEach. */}
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
