<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Hash, Arr, Log;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->get('name');

        if ( empty($name) )
        {
            return response()->json([
                'status' => false,
                'message' => 'please input name!'
            ]); 
        }

        return response()->json([
            'status' => true,
            'data' => User::where('email', 'LIKE', "%{$name}%")->get()->toArray()
        ]);
    }

    public function register(Request $request)
    {
        $data = $request->only(['name', 'email', 'password']);

        if ( !is_null(Arr::get($data, 'password')) )
            $data['password'] = Hash::make($data['password']);

        if ( empty($data) )
        {
            return response()->json([
                'status' => false,
                'message' => 'please input name!'
            ]); 
        }

        try {
            $user = User::create($data);

            return response()->json([
                'status' => true,
                'data' => $user->toArray()
            ]);
        } catch ( \Exception $e ) {
            Log::error(__METHOD__ . ': ' . $e->getMessage());

            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]); 
        }
    }
}
