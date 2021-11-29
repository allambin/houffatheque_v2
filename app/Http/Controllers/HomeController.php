<?php

namespace App\Http\Controllers;

use App\Repositories\BookRepositoryInterface;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        private BookRepositoryInterface $bookRepository
    ){}

    public function show()
    {
        $books = $this->bookRepository->findLatest();
        return Inertia::render('Home', ['books' => $books]);
    }

    public function showInfo()
    {
        return Inertia::render('Info');
    }
}
