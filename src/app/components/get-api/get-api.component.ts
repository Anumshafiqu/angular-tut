import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: false,
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  productList :any = [""];
  constructor(private http: HttpClient) {

  }
  getUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result;
      debugger;
    })

  }
  getProduct() {
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((res:any)=>{
      this.productList = res;
    })
  }

}
