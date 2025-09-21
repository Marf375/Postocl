import { useState } from "react";
import { useForm, Link } from "@inertiajs/react";
import '../../css/pg.css'
export default function ArticlePage({ article: initialArticle }) {
  const [article, setArticle] = useState(initialArticle);

  const { data, setData, post, reset } = useForm({
    author_name: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(`/article/${article.id}/comments`, {
      onSuccess: (page) => {
        setArticle(page.props.article); 
        reset();
      },
    });
  };

  if (!article) return <p>Загрузка...</p>;

  return (
    <div className="bl">
      <h1>{article.title}</h1>
      <small>Автор: {article.author_name} | {article.created_at}</small>
      <p>{article.content}</p>

      <h3>Комментарии</h3>
      {article.comments.length === 0 && <p>Комментариев пока нет.</p>}
      {article.comments.map(c => (
        <div key={c.id} style={{ marginBottom: "0.5em",  }}className="com">
          <b>{c.author_name}</b>: {c.content}
        </div>
      ))}

      <h3>Добавить комментарий</h3>
      <form onSubmit={handleSubmit}>
        <input className="i1"
          type="text"
          placeholder="Ваше имя"
          value={data.author_name}
          onChange={(e) => setData("author_name", e.target.value)}
          required
          style={{width: "50dvw" , padding: "0.5em", marginBottom: "0.5em", marginBottom:'50px' }}
        />
        <textarea
          placeholder="Комментарий"
          value={data.content}
          onChange={(e) => setData("content", e.target.value)}
          required
          style={{ width: "50dvw", padding: "0.5em", marginBottom: "0.5em" }}
        />
        <button type="submit" style={{ padding: "0.5em 1em" }}>
          Отправить
        </button>
      </form>
    </div>
  );
}
