import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post-api',
  standalone: false,
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  
  // http = inject(HttpClient);
  // carList : any [] = [] ;
  // carObj:any = {
  //   "carId": 0,
  //   "brand": "",
  //   "model": "",
  //   "year": 0,
  //   "color": "",
  //   "dailyRate": 0,
  //   "carImage": "",
  //   "regNo": ""
  // }
  // getAllCars(){
  //   this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result:any)=>{
  //     this.carList = result.data;
  //   })
  // }

  // onSaveCar() {
  //   debugger;
  //   this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((res:any)=>{
  //     if(res.result){
  //       alert("Card Add Successfully");
  //       this.getAllCars();
  //     }else {
  //       alert(res.message)
  //     }
  //   })
  // }







  constructor(private http: HttpClient) {}

  carList: any[] = [];  // Array to store list of cars
  carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": 0,
    "color": "",
    "dailyRate": 0,
    "carImage": "",
    "regNo": ""
  };

  // Get all cars from the API
  getAllCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars")
      .subscribe((result: any) => {
        this.carList = result.data;  // Populate car list from API response
      });
  }

  // Save new car to the database and add it to the table
  onSaveCar() {
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert("Car added successfully!");

          // Add the newly added car to the table without re-fetching the entire list
          this.carList.push(res.data);

          // Optionally, clear the form after adding the car
          this.carObj = {
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

  onEdit(data:any) {
    this.carObj = data
  }
  onUpdateCar() {
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((res:any)=>{
      if (res.result) {
        alert("Car update successfully!");
        this.carList.push(res.data);

      } else {
        alert(res.message);  // Show error message
      }
    })
  }
  onDelete(id:number) {
    const isDelete = confirm("Are You Sure You Want to Delete");
    if(isDelete == true){
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid="+id).subscribe((res:any)=>{
        if (res.result) {
          alert("Car Delete successfully!");
          this.getAllCars()
  
        } else {
          alert(res.message);
        }
        
      })
    }

  }
  
  






}
