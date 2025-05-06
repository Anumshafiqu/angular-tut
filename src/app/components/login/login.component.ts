import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  apiLoginObj:any = {
    "EmailId": "",
    "Password": ""
  }
  router = inject(Router)
  http = inject(HttpClient)
  onLogin() {
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login" , this.apiLoginObj).subscribe((res:any)=>{
      debugger;
      localStorage.setItem("authguard" , res.data.userId);
      localStorage.setItem("authguardToken" , res.data.token);
      this.router.navigateByUrl('ng-for')
    },error=>{
      alert('wrong creadtials')
    }
  )

  }
}
