<?php

namespace App\Providers;

use App\Repositories\BoardgameRepositoryInterface;
use App\Repositories\BookRepositoryInterface;
use App\Repositories\Eloquent\BoardgameRepository;
use App\Repositories\Eloquent\BookRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BoardgameRepositoryInterface::class, BoardgameRepository::class);
        $this->app->bind(BookRepositoryInterface::class, BookRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
