<?php

namespace App\Repositories;

use Illuminate\Support\Collection;

interface BoardgameRepositoryInterface
{
    public function all(): Collection;
}