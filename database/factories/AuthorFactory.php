<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $authors = ['Stephen King', 'Joe Hill', 'Shakespeare', 'Gilles Bachelet'];
        return [
            'name' => $authors[array_rand($authors)],
        ];
    }
}
