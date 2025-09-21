<?php

use App\Http\Controllers\BlogContr;
use App\Http\Controllers\Api\CommentContr;
use App\Http\Controllers\Api\ArticleContr;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/', [BlogContr::class, 'index'])->name('home');

Route::get('/article/{id}', [BlogContr::class, 'show'])->name('articles.show');
Route::post('/article/{id}/comments', [CommentContr::class, 'store']);
Route::get('/create', [ArticleContr::class, 'create'])->name('article.create');
Route::post('/article', [ArticleContr::class, 'store'])->name('article.store');
