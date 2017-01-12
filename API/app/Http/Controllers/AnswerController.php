<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class AnswerController extends Controller{

    public function post(Request $request){
        $req = $request->all();
        $date = date('Y/m/d H:i:s');

        DB::table('user')
          ->where('email', $req['user'])
          ->update([
              'date_last_answer' => $date
        ]); 

        $response  = DB::table('user')
          ->select('role')
          ->where('email', $req['user'])
          ->first();


        //rol, respuesta, email, timestamp

        $fp = fopen('answer.txt','a');
        fwrite($fp, $response->role.",".$req['answer'].",".$req['user'].",". $date. PHP_EOL);
        fclose($fp);


        return response()->json("OK" , 200);
    }

}
