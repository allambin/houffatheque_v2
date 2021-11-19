<?php

namespace Database\Seeders;

use App\Models\Boardgame;
use Illuminate\Database\Seeder;

class BoardgameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Boardgame::factory()->count(50)->create();
    }
}
