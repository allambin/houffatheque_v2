<?php

namespace App\Providers;

use App\Repositories\BoardgameRepositoryInterface;
use App\Repositories\Eloquent\BoardgameRepository;
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
