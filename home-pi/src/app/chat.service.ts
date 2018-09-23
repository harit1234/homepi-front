import { Injectable } from '@angular/core';
import { KnightpermitService } from './knightpermit.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

headers:any;
chats:any;
constructor(){}
}

//   constructor(private kp:KnightpermitService,private _http:HttpClient,private ar:ActivatedRoute) {
//     let head = new HttpHeaders
//     this.headers = head.set('token',kp.token)
//     this.chats = _http.get('http://localhost:3000/chats/getchats%20:' + ar.snapshot.params.id,{headers:this.headers})
//   }
//   sendmsg(obj:any){
//     this._http.post('http://localhost:3000/chats/getchats%20:' + this.ar.snapshot.params.id,obj,{headers:this.headers}).subscribe(
//       (res)=>{console.log(res)}, 
//       (err)=>{console.log(err)}
//     )
//   }
// }







