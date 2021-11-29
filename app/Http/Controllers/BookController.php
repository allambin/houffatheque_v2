<?php

namespace App\Http\Controllers;

use App\Repositories\BookRepositoryInterface;
use App\Repositories\CollectionRepositoryInterface;
use Inertia\Inertia;

class BookController extends Controller
{
    public function __construct(
        private BookRepositoryInterface $bookRepository,
        private CollectionRepositoryInterface $collectionRepository
    ){}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = $this->bookRepository->all();
        $collections = $this->collectionRepository->all();

        return Inertia::render('Books/Index', [
            'books' => $books,
            'collections' => $collections
        ]);
    }
}
