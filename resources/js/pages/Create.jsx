import React from 'react';
import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    content: '',
    author_name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/article');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/">← Назад к списку статей</Link>
      </div>

      <h1>Создание новой статьи</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Заголовок"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
            required
          />
          {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Имя автора"
            value={data.author_name}
            onChange={e => setData('author_name', e.target.value)}
            required
          />
          {errors.author_name && <div style={{ color: 'red' }}>{errors.author_name}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <textarea
            placeholder="Текст статьи"
            value={data.content}
            onChange={e => setData('content', e.target.value)}
            rows="10"
            required
          />
          {errors.content && <div style={{ color: 'red' }}>{errors.content}</div>}
        </div>

        <button type="submit" disabled={processing}>
          {processing ? 'Создание...' : 'Создать статью'}
        </button>
      </form>
    </div>
  );
}