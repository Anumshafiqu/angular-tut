import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  userObj:any={
    firstName : '',
    lastName :  '',
    userName : '',
    City : '',
    State : '',
    zipCode : '',
    isTermAgree : false,
  }
  onSave() {
    debugger;
    const formValue = this.userObj
  }

}
