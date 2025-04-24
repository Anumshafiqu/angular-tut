import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: false,
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  divBsckColor :string = '';
  isChecked : boolean  = false;
  addDivBackColor (color :string) {
    this.divBsckColor =  color;
  }
  myCss :any = {
    'background-color' : 'blue',
    'height' : '100px',
    'width' : '200px'
  }


}
