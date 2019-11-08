<?php

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

Route::domain('cp.lareact.test')->name('cp')->namespace('CP')->group(function () {
	
	Route::get('/', 'WelcomeController');

});

Route::prefix('ajax')->name('ajax')->group(function() {

    Route::name('datatables.')->group(function() {
        
        Route::get('posts', 'DatatablesController@posts')->name('posts');
        Route::get('users', 'DatatablesController@users')->name('users');

    });

});

// use for reactjs
Route::view('/{path?}', 'app');
