<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class OauthController extends Controller{

    public function post(Request $request){
        $req = $request->all();

        $response  = DB::table('user')
          ->select('role','email')
          ->where('email', $req['email'])
          ->where('password', md5($req['password']))
          ->first();
          
          DB::table('user')
          ->where('email', $req['email'])
          ->where('password', md5($req['password']))
          ->update([
              'date_last_session' => date('Y/m/d H:i:s')
          ]); 

        if(empty($response)){
          return response()->json("User not found", 404);
        }

        $response->role = md5($response->role);
        return response()->json($response);
    }

}
