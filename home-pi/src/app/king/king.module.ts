import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KingComponent } from './king/king.component';
import { RouterModule } from '@angular/router';

const route = [{
  path:'',
  component: KingComponent
}]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(route)
  ],
  declarations: [KingComponent]
})
export class KingModule {}
