import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { KnightpermitService } from '../../knightpermit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hc',
  templateUrl: './hc.component.html',
  styleUrls: ['./hc.component.css'] 
})
export class HcComponent {

  constructor(private _http : HttpClient, private kp:KnightpermitService, private ar:ActivatedRoute) { }
  headers = new HttpHeaders
  switchon(){
    this._http.post('http://raspberrypi.local:3000/%20:' + this.ar.snapshot.params.id, {buttonStatus : 'true'},{headers:this.headers.set('token',this.kp.token)}).subscribe(
      (data)=>{console.log(data)},
      (err)=>{console.log(err)}
    )
  }
  switchoff(){
    this._http.post('http://raspberrypi.local:3000/%20:' + this.ar.snapshot.params.id, {buttonStatus : 'false'},{headers:this.headers.set('token',this.kp.token)}).subscribe(
      (data)=>{console.log(data)},
      (err)=>{console.log(err)}
    )
  }

}
