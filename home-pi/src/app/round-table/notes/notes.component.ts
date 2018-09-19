import { Component, OnInit } from '@angular/core';
import { NoteService} from '../../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  // for tracking new notes to be added
  newheading:string; 
  newcontent:string;
  obj:any ={
    "heading":"example heading",
    "content":"example content"
  }


  notesExist:boolean=false; //whether there are notes in db
  
  notesArray=[]; //an array for storing all the notes from the db
  

  constructor(private noteservice : NoteService) {
    noteservice.notes.subscribe((v:any)=>{
      this.notesArray = (v.notes)
      this.notesExist=true;
      console.log(this.notesArray)
    },
      (err:any)=>{
        console.log(err)
      }
    )
  }


  addnotebox:boolean = false; //whether or not to display addnotebox
  add() //display addnotebox method activated by add note button in view
  {
    this.addnotebox = true;
  };

  // duplicatenote:boolean
  //method to add note in view as well as database triggered by save note button in view
  addnote=()=>{
    console.log('addnote called')
    this.obj.heading = this.newheading;
    this.obj.content = this.newcontent;

    //check for duplicated notes
    // this.notesArray.forEach((el)=>{
    //   this.duplicatenote = false
    //   if(el.heading == this.newheading){
    //     if(el.content == this.newcontent)
    //     {
    //       this.duplicatenote = true
    //     }
    //   }
    // })
    // if(!this.deletenote){
    this.addnotebox = false;
    this.notesArray.push(this.obj);//add note in view
    console.log(this.notesArray)
    this.noteservice.saveNote(this.obj)// for adding note in db
    }
  // }
  deletednote:any
  deletenote(i:number){
   this.deletednote = this.notesArray.splice(i,1);//removed from view
    this.noteservice.removeNote(this.deletednote[0])
  }
}