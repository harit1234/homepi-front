import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnDestroy,OnInit {
constructor(){};
ngOnDestroy(){};
ngOnInit(){};
}
//   chatExist:boolean = false;
//   showwrtmsgbox:boolean = false;
//   chatarray=[];
//   writtenMsg:string;
//   msgTo:string
  
//   constructor(private ar:ActivatedRoute,private chats:ChatService) {
//     chats.chats.subscribe(
//       (res)=>{
//         this.chatarray = res.chats
//       },
//       (err)=>{
//         console.log(err)
//       }
//     )
//    }

//    writemsg(){
//      this.showwrtmsgbox=true;
//    }
//    sendmsg(){

//    }
   
//   ngOnInit(){
//     let initComponent=()=>{
//       if(this.chatarray.length!=0)
//       {this.chatExist = true;}
//       initComponent();
//     }
//    }

//   ngOnDestroy() {
//     this.chats.chats.unsubscribe()
//   }

// }
