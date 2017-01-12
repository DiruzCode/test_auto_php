<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class OauthController extends Controller{

    public function post(Request $request){
        $req = $request->all();

        $response  = DB::table('user')
          ->select('role','email', 'date_last_answer', 'modal')
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

        $diff = $this->get_diff($response->date_last_answer);

        $response->role = md5($response->role);
        $response->modal = $diff;
        return response()->json($response);
    }

    public function get_diff($last_date){
        $date1 = date($last_date);
        $date2 = date('Y/m/d H:i:s');

        $ts1 = strtotime($date1);
        $ts2 = strtotime($date2);

        $year1 = date('Y', $ts1);
        $year2 = date('Y', $ts2);

        $month1 = date('m', $ts1);
        $month2 = date('m', $ts2);

        $diff = (($year2 - $year1) * 12) + ($month2 - $month1);

        if($diff !== 0){
          return true;
        }

        return false;


    }

}
