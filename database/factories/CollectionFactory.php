<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CollectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $collections = ['Pocket', 'Le livre de poche', 'Lecture junior'];
        return [
            'name' => $collections[array_rand($collections)],
        ];
    }
}
