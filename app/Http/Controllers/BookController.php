<?php

namespace App\Http\Controllers;

use App\Repositories\BookRepositoryInterface;
use Inertia\Inertia;

class BookController extends Controller
{
    public function __construct(private BookRepositoryInterface $bookRepository){}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = $this->bookRepository->all();

        return Inertia::render('Books/Index', [
            'books' => $books,
        ]);
    }
}
