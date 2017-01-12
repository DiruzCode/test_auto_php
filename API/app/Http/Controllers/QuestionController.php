<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class QuestionController extends Controller{

    public function get($hash){

        $response  = DB::table('question')
          ->select('role','question','type')
          ->where('role', $hash)
          ->first();

        return response()->json($response);
    }

}
