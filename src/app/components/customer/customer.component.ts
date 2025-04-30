import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerTabs:any [] = ["Basic info" , "Paln info", "payment"]

  customerList:any [] = [];
  customerObj :any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }
  constructor(private custSer:CustomerService, private http:HttpClient) {
    this.getCustomers()
  }
  getCustomers() {
   this.custSer.loadCustomers().subscribe((res:any) =>{
    this.customerList= res.data;
   })
  }
  // onSaveCustomers() {
  //   debugger;
  //   this.custSer.createNewCustoners(this.customerObj).subscribe((res:any)=>{
  //     if(res.result){
  //       alert("customers  created successfully");
  //       // this.customerList.push(res.data);
  //       this.getCustomers();
  //     } else {
  //       alert(res.result);
  //     }
  //   })
  // }



  onSaveCustomers() {
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCustomer", this.customerObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert("Customers added successfully!");

          // Add the newly added car to the table without re-fetching the entire list
          this.customerList.push(res.data);

          // Optionally, clear the form after adding the car
          this.customerObj = {
            "carId": 0,
            "brand": "",
            "model": "",
            "year": 0,
            "color": "",
            "dailyRate": 0,
            "carImage": "",
            "regNo": ""
          };
        } else {
          alert(res.message);  // Show error message
        }
      });
  }

  


  
  
  
  
}
