<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Article extends Model
{
     use HasFactory;
    
    protected $fillable = [
        'id',
        'title',
        'content',
        'created_at',
        'author_name'
    ];
    public function comments(): HasMany
{
    return $this->hasMany(Comment::class);
}
}
