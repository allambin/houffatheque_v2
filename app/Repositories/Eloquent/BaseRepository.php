<?php

namespace App\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

abstract class BaseRepository
{
    public function __construct(protected Model $model){}

    public function all(): Collection
    {
        return $this->model->all();
    }
}