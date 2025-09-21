<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StArtReq;
use App\Http\Resources\ArticleRes;
use App\Http\Resources\ArticleWithCommentRes;
use App\Http\Resources\CommentsRes;
use Illuminate\Http\JsonResponse;
use App\Models\Article;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
class ArticleContr extends Controller
{
     public function create()
    {
        return Inertia::render('NewArticle');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $articles=Article::latest()->paginate(10);
      return response()->json(['data'=>ArticleRes::collection($articles),]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StArtReq $request)
    {
       $article=Article::create($request->validated());
        return redirect()->route('home')
                    ->with('success', 'Статья создана успешно!');
    }

    /**
     * Display the specified resource.
     */
    public function show( $id):RedirectResponse
    {
        $article=Article::with('comments')->findOrFail($id);
        return response()->json(['data'=>new ArticleWithCommentRes($article),201]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
