<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'title',
        'isbn10',
        'isbn13',
    ];

    public function publisher()
    {
        return $this->belongsTo(Publisher::class);
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }

    public function authors()
    {
        return $this->belongsToMany(Author::class, 'written_by');
    }
}
