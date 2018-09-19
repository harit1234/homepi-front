import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard/dasboard.component';
import { RouterModule } from '@angular/router'

const route = [{
  path: '',
  component: DasboardComponent
},
{
  path:'king',
  loadChildren:'../king/king.module#KingModule'
},
{
  path:'knightSignin',
  loadChildren:'../knight/knight.module#KnightModule'
}]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(route)
  ],
  declarations: [DasboardComponent]
})
export class DashboardModule { }
