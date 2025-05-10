import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  tokenEpired$:Subject<boolean> = new Subject<boolean>();
  TokenReceived$:Subject<boolean> = new Subject<boolean>(); 
  apiURL:any = "https://freeapi.miniprojectideas.com/api/CarRentalApp/"

  constructor(private htttp:HttpClient) { }
  loadCustomers () {
    return this.htttp.get(this.apiURL + 'GetCustomers')
  }
  createNewCustoners(obj:any) {
    return this.htttp.post(this.apiURL + 'CreateNewCustomer' , obj)
    
  }
}
