import React from 'react';
import { Link } from '@inertiajs/react';
import '../../css/st.css'
export default function ArticleList({ articles }) {
  const list = articles?.data || []; 

  return (
    <div>
      <h1>Список статей</h1>
 
     
      <div style={{ margin: '1em 0' } }>
        <Link
          href="/create"
          style={{
            display: 'inline-block',
            padding: '0.5em 1em',
            background: '#4CAF50',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          Добавить статью
        </Link>
      </div><div className='gr'>
      {list.map(article => (
        <div key={article.id} style={{ marginBottom: '1em' } } className="stat">
          <h2>
            <Link href={`/article/${article.id}`}>{article.title}</Link>
          </h2>
          <small>
            Автор: {article.author_name} | {article.created_at}
          </small>
          <p>{article.content}</p>
        </div>
      ))}
        </div>
    </div>
  );
}
