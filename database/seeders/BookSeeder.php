<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\Publisher;
use App\Models\Collection;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::factory()
            ->count(200)
            ->for(Publisher::factory(), 'publisher')
            ->for(Collection::factory(), 'collection')
            ->has(Author::factory()->count(2), 'authors')
            ->create();
    }
}
