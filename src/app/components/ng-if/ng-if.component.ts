import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
div1Visible: boolean = true;
div1hide() {
this.div1Visible = false
}
div1show() {
this.div1Visible =  true
}
number1 : string = "";
number2 : string = "";
}
