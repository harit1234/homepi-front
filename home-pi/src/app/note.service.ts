import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { KnightpermitService } from './knightpermit.service';

@Injectable()
  export class NoteService {
    public notes;
    newnote:any;
    obj:any={
      "heading":"example Heading",
      "content":"example Content"
    }
    headers;

      constructor(private _http:HttpClient,private ar:ActivatedRoute,private kp:KnightpermitService){
       let httpheader = new HttpHeaders;
       this.headers = httpheader.set('token',kp.token)

       this.notes = _http.get('http://raspberrypi.local:3000/notes/getnotes/%20:'+ ar.snapshot.params.id,{headers:this.headers})
       this.notes.subscribe((res)=>{
         console.log(res.notes)
       })
      }
      saveNote(obj:any){
        this._http.post('http://raspberrypi.local:3000/notes/postnote/%20:'+ this.ar.snapshot.params.id,{heading:obj.heading,content:obj.content},{headers:this.headers}).subscribe(
          (res:any)=>{console.log(res.msg)},
          (err)=>{console.log(err)}
        )
      }
      removeNote(obj:any){
        this._http.post('http://raspberrypi.local:3000/notes/deletenote/%20:'+ this.ar.snapshot.params.id,{heading : obj.heading,content:obj.content},{headers:this.headers}).subscribe(
          (res:any)=>{console.log(res)},
          (err)=>{console.log(err)}
        )
      }
}

