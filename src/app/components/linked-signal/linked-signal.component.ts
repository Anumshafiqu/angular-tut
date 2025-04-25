import { Component, inject, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: false,
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
Name = signal<string>("Cheatan ");
lastName = signal<string>(" jogi");
fullName = linkedSignal({
    source : this.Name,
    computation : (newOption:any,previous :any) => {
      const fullName = newOption + " " + this.lastName();
      return fullName
    }
})
CahngeName() {
  this.Name.set("Rahul")
}
 user = signal({id:111 , name : "Jon"});
email = linkedSignal({
  source: this.user,
  computation:user => `${user.name+user.id}@gmail.com`,
  equal: (a:any,b:any) => a.id !== b.id
})

  // Method to change user data

  changeId() {
    debugger;
    this.user.set({id: 123, name: 'Jon' });
    console.log('User updated:', this.user());
  }
}
