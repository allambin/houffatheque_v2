<?php

namespace App\Repositories;

use App\Models\Boardgame;
use Illuminate\Support\Collection;

interface BoardgameRepositoryInterface
{
    public function all(): Collection;
    public function create($params): Boardgame;
    public function edit(Boardgame $boardgame, array $params): bool;
}