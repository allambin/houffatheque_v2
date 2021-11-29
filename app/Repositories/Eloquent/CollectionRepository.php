<?php

namespace App\Repositories\Eloquent;

use App\Models\Collection as BookCollection;
use App\Repositories\CollectionRepositoryInterface;
use Illuminate\Support\Collection;

class CollectionRepository extends BaseRepository implements CollectionRepositoryInterface
{
    public function __construct(BookCollection $collection)
    {
        parent::__construct($collection);
    }

    public function all(): Collection
    {
        return $this->model->all();
    }
}