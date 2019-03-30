import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNgProject';
  name: string = "Miss Prannawan Kongpad";
  score:number=99;
  student:any={
    name : "lala",
    studentID : "5921602655",
    weight : 30,
    height : 155
  }
  studentlist = [{
    name : "lala",
    studentID : "5921602655",
    weight : 30,
    height : 155
  },
  {
    name : "lulu",
    studentID : "5921602605",
    weight : 60,
    height : 175
  },
  {
    name : "lolo",
    studentID : "5921602955",
    weight : 30,
    height : 195

  }]
  
constructor(){
  this.student.bmi=(this.student.weight/((this.student.height/100)*(this.student.height/100))).toFixed(2);
  this.studentlist.map((Object,index)=>{
    let Obj:any=Object;
    Obj.bmi = (Object.weight/((Object.height/100)*(Object.height/100))).toFixed(2);
    return Obj;
  })
}



}
