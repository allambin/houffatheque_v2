<?php

namespace App\Repositories\Eloquent;

use App\Models\Boardgame;
use App\Repositories\BoardgameRepositoryInterface;

class BoardgameRepository extends BaseRepository implements BoardgameRepositoryInterface
{
    public function __construct(Boardgame $boardgame)
    {
        parent::__construct($boardgame);
    }
}