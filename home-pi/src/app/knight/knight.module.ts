import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnightComponent } from './knight/knight.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { KnightpermitService } from '../knightpermit.service';
import { KnightguardService } from '../knightguard.service'

const routes = [{
  path:'',
  component:KnightComponent
}, 
{
  path: 'roundtable/:id',
  loadChildren: '../round-table/round-table.module#RoundTableModule',
  canLoad:[KnightguardService]
}]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,HttpClientModule
  ],
  declarations: [KnightComponent],
  providers:[KnightpermitService,KnightguardService]
})

export class KnightModule{
  constructor(){}
 }

