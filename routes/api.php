<?php

use App\Http\Controllers\Api\ArticleContr;
use App\Http\Controllers\Api\CommentContr;
use Illuminate\Support\Facades\Route;


Route::get('/articles', [ArticleContr::class, 'index']);
Route::get('/articles/{id}', [ArticleContr::class, 'show']);
Route::post('/articles', [ArticleContr::class, 'store']);
Route::post('/articles/{id}/comments', [CommentContr::class, 'store']);