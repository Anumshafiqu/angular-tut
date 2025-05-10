import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router= inject(Router);
  custService = inject(CustomerService);
  http = inject(HttpClient);
  constructor () {
    this.custService.tokenEpired$.subscribe((res:any)=>{
      if(res){
        
      debugger;
      const loggedData = localStorage.getItem("angular19TokenData");
      if(loggedData){
        const loggedUser = JSON.parse(loggedData);
        const obj = {
          "emailId": "string",
          "token": "string",
          "refreshToken": "string"
        }
        this.http.post("https://projectapi.gerasim.in/api/UserApp/refresh",obj).subscribe((res:any)=>{
          debugger;
          localStorage.setItem("authguard" , res.data.userId);
          localStorage.setItem("authguardToken" , res.data.token);
          localStorage.setItem("angular19TokenData" , JSON.stringify(res.data));
          this.custService.TokenReceived$.next(true);
        })
      }
    }

    })
  }
  logOff() {
    localStorage.removeItem('authguard');
    this.router.navigateByUrl('login')

    
  }



}
