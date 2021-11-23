<?php

use App\Http\Controllers\BoardgameController;
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'show'])->name('root');
Route::get('/home', [HomeController::class, 'show'])->name('home');
Route::get('/renseignements', [HomeController::class, 'showInfo'])->name('renseignements');
Route::get('/ludotheque', [BoardgameController::class, 'index'])->name('ludotheque');
Route::get('/bibliotheque', [BookController::class, 'index'])->name('bibliotheque');

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';