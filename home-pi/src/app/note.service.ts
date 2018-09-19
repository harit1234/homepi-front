import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable()
  export class NoteService {
    public notes;
    newnote:any;
    obj:any={
      "heading":"example Heading",
      "content":"example Content"
    }

      constructor(private _http:HttpClient,private ar:ActivatedRoute){
        
       this.notes = _http.get('http://localhost:3000/notes/getnotes/%20:'+ ar.snapshot.params.id)
       this.notes.subscribe((res)=>{
         console.log(res.notes)
       })
      }
      saveNote(obj:any){
        this._http.post('http://localhost:3000/notes/postnote/%20:'+ this.ar.snapshot.params.id,{heading:obj.heading,content:obj.content}).subscribe(
          (res:any)=>{console.log(res.msg)},
          (err)=>{console.log(err)}
        )
      }
      removeNote(obj:any){
        this._http.post('http://localhost:3000/notes/deletenote/%20:'+ this.ar.snapshot.params.id,{heading : obj.heading,content:obj.content}).subscribe(
          (res:any)=>{console.log(res)},
          (err)=>{console.log(err)}
        )
      }
}

