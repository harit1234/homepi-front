import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundTableComponent } from './round-table/round-table.component';
import { RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { HcComponent } from './hc/hc.component';
import { ChatsComponent } from './chats/chats.component';
import { FormsModule } from '@angular/forms'


const routes = [{
  path: '',
  component: RoundTableComponent,
  pathMatch:'full'
}]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ],
  declarations: [RoundTableComponent, NotesComponent, HcComponent, ChatsComponent]
})
export class RoundTableModule { 
  constructor(){}
}
