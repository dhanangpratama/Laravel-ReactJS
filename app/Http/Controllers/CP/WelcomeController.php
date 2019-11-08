<?php

namespace App\Http\Controllers\CP;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function __invoke()
    {
        return 'cp';
    }
}
