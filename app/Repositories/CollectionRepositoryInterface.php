<?php

namespace App\Repositories;

use Illuminate\Support\Collection;

interface CollectionRepositoryInterface
{
    public function all(): Collection;
}