import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: false,
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  title: string = 'Welcome to Angular 19!';
  textdiv :string  =  "angular 19";
  sayHello() {
    alert("Hello from Angular!");
  }

  username: string = '';
  
}
