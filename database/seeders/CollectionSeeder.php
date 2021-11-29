<?php

namespace Database\Seeders;

use App\Models\Collection;
use Illuminate\Database\Seeder;

class CollectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = [
            "Généralités, informatique",
            "Philosophie, psychologie",
            "Religions",
            "Sciences sociales, politique, économie, enseignement",
            "Environnement, sciences exactes",
            "Sciences appliquées, médecine, cuisine, jardinage",
            "Arts, sports, bricolage",
            "Littérature",
            "Géographie, histoire",
            "Monographies régionales",
            "Guerre 40-45",
            "SEGNIA",
            "Livres pour enfants"
        ];

        foreach ($names as $name) {
            Collection::factory()->create(['name' => $name]);
        }
    }
}
