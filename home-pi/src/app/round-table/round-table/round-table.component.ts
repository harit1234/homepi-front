import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { NoteService } from '../../note.service';


@Component({
  selector: 'app-round-table',
  templateUrl: './round-table.component.html',
  styleUrls: ['./round-table.component.css'],
  providers:[NoteService]
})
export class RoundTableComponent implements OnInit {
  knightname;
  constructor(private ar : ActivatedRoute,private noteserv:NoteService) {
    this.knightname = ar.snapshot.params.id;
    }

  ngOnInit() {
  }
 
}
