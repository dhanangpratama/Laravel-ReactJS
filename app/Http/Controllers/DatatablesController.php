<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DataTables, DB;
use App\Post;
use App\User;

class DatatablesController extends Controller
{
    public function posts()
    {
        $model = Post::query();

        return DataTables::eloquent($model)
            // ->addColumn('actions', 'api.datatables.company_actions') // load view template
            // ->editColumn('created_at', '@datetime($created_at, true)')
            // ->editColumn('balance', '@rupiah($balance)')
            // ->rawColumns(['actions'])
            // ->orderColumn('created_at', '-name $1')
            ->only(['id','fullname', 'taken_date', 'nationality'])
            ->toJson();
    }

    public function users()
    {
        $model = User::query();

        return DataTables::eloquent($model)
            // ->addColumn('actions', 'api.datatables.company_actions') // load view template
            // ->editColumn('created_at', '@datetime($created_at, true)')
            // ->editColumn('balance', '@rupiah($balance)')
            // ->rawColumns(['actions'])
            // ->orderColumn('created_at', '-created_at $1')
            // ->order(function ($query) {
            //     $query->orderBy('created_at', 'desc');
            // })
            ->only(['name','email', 'created_at'])
            ->toJson();
    }
}
