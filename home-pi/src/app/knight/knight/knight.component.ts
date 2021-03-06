import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KnightpermitService } from '../../knightpermit.service';
import { Router,  } from '@angular/router'

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent{

  constructor(private _http : HttpClient,private kp:KnightpermitService, private router:Router) {
  
  }
  
  http;
  
  public ngOnDestroy(){
    
   }
  
  sendForm = (a:any):void=> {
    this.http = this._http.post('http://raspberrypi.local:3000/',
    {
      username:a.value.username,
      password:a.value.password});
      this.http.subscribe((res:any)=>{
        if(res.msg == 'loggedin'){
          this.kp.loggedin = true;
          this.kp.token = res.token;
          this.router.navigate(['knightSignin','roundtable',a.value.username])
        }},(err)=>{
          console.log(err)
        }
      ) 
  }
}