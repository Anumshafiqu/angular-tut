import { Component, inject } from '@angular/core';
import { PipeNaPipe } from '../pipe-na.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  courseName : any = 'angular';
  cityArray : string[] = ["okara" , "lahore" ,"karachi" , "islamabad"];
  employeeArray : any [] = [
    {empId :123 , Name : 'aAAa' , contactNo : 3098402842,attendance:40},
    {empId :345 , Name : '' , contactNo : 3098402842,attendance:20},
    {empId :123 , Name : 'BBB' , contactNo : 3098402842,attendance:50},
    {empId :394 , Name : 'CCC' , contactNo : 3098402842,attendance:100},
    {empId :324 , Name : '' , contactNo : 3098402842,attendance:75},
  ]
  studentObj :any =  {
    name: 'jon' ,
    city : 'karachi',
    email:'jon@gmail.com'
  }

  constructor() {
    this.getUsers();
  }
  http =inject(HttpClient);
  getUsers(){
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res:any)=>{
      debugger;
    })

  }
  currentDate : Date = new Date();


}
