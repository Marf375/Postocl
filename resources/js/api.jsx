const API_URL = "http://127.0.0.1:8000/api";

export async function fetchArticles() {
  const res = await fetch(`${API_URL}/articles`);
  return res.json();
}

export async function fetchArticle(id) {
  const res = await fetch(`${API_URL}/articles/${id}`);
  return res.json();
}

export async function createArticle(article) {
  const res = await fetch(`${API_URL}/articles`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(article)
  });
  return res.json();
}

export async function createComment(articleId, comment) {
  const res = await fetch(`${API_URL}/articles/${articleId}/comments`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(comment)
  });
  return res.json();
}
