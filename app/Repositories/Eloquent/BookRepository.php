<?php

namespace App\Repositories\Eloquent;

use App\Models\Book;
use App\Repositories\BookRepositoryInterface;
use Illuminate\Support\Collection;

class BookRepository extends BaseRepository implements BookRepositoryInterface
{
    public function __construct(Book $book)
    {
        parent::__construct($book);
    }

    public function all(): Collection
    {
        return $this->model->with('authors')->with('publisher')->with('collection')->get();
    }

    public function findLatest($number = 5): Collection
    {
        return $this->model->with('authors')
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();
    }
}