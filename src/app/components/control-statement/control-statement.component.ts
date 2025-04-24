import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  standalone: false,
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
div1Visible : boolean = true;
isChecked : boolean = true;
dayName : string = "" ;
hideShowDiv (isShow:any) {
  this.div1Visible = isShow
}
employeeArray : any [] = [
  {empId :123 , Name : 'aAAa' , contactNo : 3098402842},
  {empId :345 , Name : 'aAAa' , contactNo : 3098402842},
  {empId :123 , Name : 'BBB' , contactNo : 3098402842},
  {empId :394 , Name : 'CCC' , contactNo : 3098402842},
  {empId :324 , Name : 'DDD' , contactNo : 3098402842},
]
cityList : string [] = [
  "lahore",
  "okara",
  "Pakistan"
]

}
