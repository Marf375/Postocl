<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\CommentsRes;
use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
class CommentContr extends Controller
{
     public function store(StoreCommentRequest $request, $articleId): RedirectResponse
    {
        $article = Article::findOrFail($articleId);
        
        $comment = Comment::create([
            'article_id' => $article->id,
            'author_name' => $request->author_name,
            'content' => $request->content
        ]);
        return redirect()->back()->with('success', 'Комментарий успешно добавлен!');
    }
}
