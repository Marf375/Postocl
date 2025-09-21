<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleRes extends JsonResource
{
   
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'content'=>$this->content,
            'author_name'=>$this->author_name,
            'created_at'=>$this->created_at->format('d-m-Y H:i'),
            
        ];
    }
}
