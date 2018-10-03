import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { KnightpermitService } from '../../knightpermit.service'

@Component({
  selector: 'app-hc',
  templateUrl: './hc.component.html',
  styleUrls: ['./hc.component.css'] 
})
export class HcComponent {

  constructor(private _http : HttpClient, private kp:KnightpermitService) { }
  headers = new HttpHeaders
  switchon(){
    this._http.post('http://raspberrypi.local:3000', {buttonStatus : 'true'},{headers:this.headers.set('token',this.kp.token)})
  }
  switchoff(){
    this._http.post('http://raspberrypi.local:3000', {buttonStatus : 'false'},{headers:this.headers.set('token',this.kp.token)})
  }
 
}
