import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userForm : FormGroup = new FormGroup ({
    fName : new FormControl(""),
    lName : new FormControl(""),
    userName: new FormControl(""),
    state: new FormControl(""),
    city : new FormControl(""),
    zip: new FormControl(""),
    isTermAgree : new FormControl(""),
  });
  onSaveUser() {
    const isValid = this.userForm.valid;
    const formValue = this.userForm.value;
    debugger;
  }
  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 5000);
  }

}
