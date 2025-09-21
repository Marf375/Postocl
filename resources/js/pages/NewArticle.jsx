import { useForm } from '@inertiajs/react';
import '../../css/cr.css'
function NewArticle() {
  const { data, setData, post, processing } = useForm({
    title: '',
    content: '',
    author_name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    post('/article', {
      onSuccess: () => {
        window.location.href = '/';
      }
    });
  };

  return (
    <div className='ct'>
      
      <form onSubmit={handleSubmit} className="form">
        <h1>Новая статья</h1>
        <input
          type="text"
          placeholder="Заголовок"
          value={data.title}
          onChange={e => setData('title', e.target.value)}
          required
        /><br/><br/>
        
        <input
          type="text"
          placeholder="Имя автора"
          value={data.author_name}
          onChange={e => setData('author_name', e.target.value)}
          required
        /><br/><br/>
        
        <textarea
          placeholder="Текст статьи"
          value={data.content}
          onChange={e => setData('content', e.target.value)}
          required
        /><br/><br/>
        
        <button type="submit" disabled={processing}>
          {processing ? 'Сохранение...' : 'Сохранить'}
        </button>
      </form>
      
    </div>
  );
}

export default NewArticle;