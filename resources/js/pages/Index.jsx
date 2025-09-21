import { Link } from '@inertiajs/react';
import ArticleList from './ArticleList';
import ArticlePage from './ArticlePage';
import NewArticle from './NewArticle';

export default function Index({ page }) {
  const component = page.component;
  const props = page.props || {};

  if (component === 'ArticleList') {
    return <ArticleList {...props} />;
  }
  if (component === 'ArticlePage') {
    return <ArticlePage {...props} />;
  }
  if (component === 'NewArticle') {
    return <NewArticle {...props} />;
  }

  return (
    <div>
      <h1>Неизвестная страница</h1>
      <Link href="/">Вернуться на главную</Link>
    </div>
  );
}
