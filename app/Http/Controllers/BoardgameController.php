<?php

namespace App\Http\Controllers;

use App\Models\Boardgame;
use App\Repositories\BoardgameRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BoardgameController extends Controller
{
    public function __construct(private BoardgameRepositoryInterface $boardgameRepository){}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $boardgames = $this->boardgameRepository->all();

        return Inertia::render('Boardgames/Index', [
            'boardgames' => $boardgames,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Boardgame  $boardgame
     * @return \Illuminate\Http\Response
     */
    public function show(Boardgame $boardgame)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Boardgame  $boardgame
     * @return \Illuminate\Http\Response
     */
    public function edit(Boardgame $boardgame)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Boardgame  $boardgame
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Boardgame $boardgame)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Boardgame  $boardgame
     * @return \Illuminate\Http\Response
     */
    public function destroy(Boardgame $boardgame)
    {
        //
    }
}
