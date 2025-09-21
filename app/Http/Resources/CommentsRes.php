<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentsRes extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'author_name'=>$this->author_name,
            'content'=>$this->content,
            'created_at'=>$this->created_at->format('d-m-Y H:i'),
        ];
    }
}
