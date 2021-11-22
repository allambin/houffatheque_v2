<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PublisherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $publishers = ['JEAN-CLAUDE LATTES', 'ALBIN MICHEL', 'J\'ai lu'];
        return [
            'name' => $publishers[array_rand($publishers)],
        ];
    }
}
