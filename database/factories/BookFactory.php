<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => implode(' ', $this->faker->words(3)),
            'isbn10' => $this->faker->isbn10,
            'isbn13' => $this->faker->isbn13,
        ];
    }
}
