import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';
// import { request } from 'http';
// import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object={};
  request = {
    key1:50,
    key2:10
  }

result:Number=null;

userDetail : any =  {
  id:"",
  name:""
}

  noteDetail:any = [];

constructor(private service: CommonServiceService){
  //  this.getData();
   this.getUserDetail();
  
}

getData(){
  this.service.getData(this.request).subscribe((response:any) =>{
    console.log(response);
    this.result= response.result;
  });
}

studentId = "5721602287";

getUserDetail(){
  let request = {
    id: this.studentId
  }
  this.service.getUserDetail(request).subscribe((response:any) =>{
    console.log(response);
    this.userDetail = response.user[0]
    this.noteDetail = response.noteDetail[0].note_type
    console.log(this.getUserDetail,this.noteDetail);
    
  });
}

listDetail:any=[];
selectNote(list){
  this.listDetail = list
  console.log(this.listDetail);
}
errorMsg="";
updateNoteName(){
  let request = {
    id: this.userDetail.id,
    noteId: Number(this.editNoteDetail.note_id),
    name : this.editNoteDetail.name
  }
this.service.updateNoteName(request).subscribe((response: any) => {
  console.log(response);
  
  if(response.success){
    this.errorMsg = "แก้ไขสำเร็จ"
    this.getUserDetail();
  }else{
    this.errorMsg = "แก้ไขไม่สำเร็จ"
  }
setTimeout(() =>{
  this.errorMsg=''
},2000)

});

}

editNoteDetail:any={
  note_id:"",
  name:""
};
editNote(note){
  console.log(note);
  this.editNoteDetail = JSON.parse(JSON.stringify(note))
}




}

