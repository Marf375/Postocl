<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BlogContr extends Controller
{
    public function index()
    {
        $articles = Article::latest()
            ->paginate(10)
            ->through(fn($article) => [
                'id' => $article->id,
                'title' => $article->title,
                'content' => Str::limit($article->content, 150),
                'author_name' => $article->author_name,
                'created_at' => $article->created_at->format('d.m.Y H:i'),
            ]);

        return Inertia::render('ArticleList', [
            'articles' => $articles,
        ]);
    }

    public function show($id)
    {
        $article = Article::with('comments')->findOrFail($id);

        return Inertia::render('ArticlePage', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'content' => $article->content,
                'author_name' => $article->author_name,
                'created_at' => $article->created_at->format('d.m.Y H:i'),
                'comments' => $article->comments->map(fn($comment) => [
                    'id' => $comment->id,
                    'author_name' => $comment->author_name,
                    'content' => $comment->content,
                    'created_at' => $comment->created_at->format('d.m.Y H:i'),
                ]),
            ],
        ]);
    }
}
