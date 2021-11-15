<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        return Inertia::render('Home');
    }

    public function showInfo()
    {
        return Inertia::render('Info');
    }
}
