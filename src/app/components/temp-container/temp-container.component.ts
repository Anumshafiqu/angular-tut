import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-container',
  standalone: false,
  templateUrl: './temp-container.component.html',
  styleUrl: './temp-container.component.css'
})
export class TempContainerComponent {

  employeeArray : any [] = [
    {empId :123 , Name : 'aAAa' , contactNo : 3098402842, isActive: true},
    {empId :345 , Name : '' , contactNo : 3098402842, isActive: false},
    {empId :123 , Name : 'BBB' , contactNo : 3098402842, isActive: true},
    {empId :394 , Name : 'CCC' , contactNo : 3098402842, isActive: true},
    {empId :324 , Name : '' , contactNo : 3098402842, isActive: false},
  ]
  isLoader : boolean = true;
   constructor() {
    setTimeout(() => {
    this.isLoader = false
    }, 3000);
   }

}
