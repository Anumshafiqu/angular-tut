import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router= inject(Router)
  logOff() {
    localStorage.removeItem('authguard');
    this.router.navigateByUrl('login')

    
  }



}
