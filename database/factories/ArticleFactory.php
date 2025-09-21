<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Article;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(5),
            'author_name' => $this->faker->name(), 
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
