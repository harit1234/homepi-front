import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { KnightpermitService } from './knightpermit.service'
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KnightguardService implements CanLoad {

  constructor(private kp:KnightpermitService, private router : Router) {
   }
   canLoad(route:Route){
    if(this.kp.loggedin)
    {
      return true;
    }
    else{
      this.router.navigate(['knightSignin']);
      console.log('anauthorised');
      return false;
    }
   }
}
