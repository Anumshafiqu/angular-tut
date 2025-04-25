import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: false,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {

  firstName = signal ("jon");
  lastName = signal("cheatan");
  courseName : string = "angular19";
  rollNumber = signal(0);

  constructor () {
    const value = this.firstName();
    setTimeout(() => {
      this.courseName = "React/js";
      this.firstName.set("Rahul")
    }, 5000);
  }
  onincrement() {
    this.rollNumber.update(oldValue => oldValue +1)
  }

}
