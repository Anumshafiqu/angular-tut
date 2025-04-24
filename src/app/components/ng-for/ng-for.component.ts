import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityArray : string[] = ["okara" , "lahore" ,"karachi" , "islamabad"];
  employeeArray : any [] = [
    {empId :123 , Name : 'aAAa' , contactNo : 3098402842},
    {empId :345 , Name : 'aAAa' , contactNo : 3098402842},
    {empId :123 , Name : 'BBB' , contactNo : 3098402842},
    {empId :394 , Name : 'CCC' , contactNo : 3098402842},
    {empId :324 , Name : 'DDD' , contactNo : 3098402842},
  ]

}
