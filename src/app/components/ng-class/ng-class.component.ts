import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: false,
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  divBckColor :string = "bg-secondary";
  isChecked :boolean = false;
  div3ClassName : string = "";
  addDiv1Color (className :string) {
    this.divBckColor = className
  }
  

}
