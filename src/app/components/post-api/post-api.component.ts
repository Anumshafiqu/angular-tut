import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Car, IcarList } from '../model/car';
import { TabsComponent } from '../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-post-api',
  standalone: false,
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent{
  
   http = inject(HttpClient);
   carList : any [] = [
    {
      brand: 'Toyota',
      model: 'Camry',
      regNo: 'ABC123',
      year: 2020,
      color: 'Black',
      dailyRate: 70
    },
    {
      brand: 'Honda',
      model: 'Civic',
      regNo: 'XYZ456',
      year: 2019,
      color: 'White',
      dailyRate: 65
    }
   ] ;
  carObj:Car = new Car();
  // @ViewChild is a decorator in Angular that lets you get a reference to a DOM element, component,
  //  or directive in your template from your TypeScript code (class).
  @ViewChild(TabsComponent) myTabViewChild : TabsComponent | undefined ;
  @ViewChild('txtCity') myCityTxtBox :ElementRef | undefined ;
  // readCity() {
  //   const city = this.myCityTxtBox?.nativeElement.value;
  //   if(this.myCityTxtBox) {
  //     this.myCityTxtBox.nativeElement.style.color = "red";
  //   }
  //   const value = this.myTabViewChild?.currentTab;
    
  // }
  readCity() {
    const city = this.myCityTxtBox?.nativeElement.value;

    const value = this.myTabViewChild?.currentTab;
    console.log('City:', city);
    console.log('Current Tab:', value);
  }
  getAllCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result:any)=>{
      this.carList = result.data;
    })
  }

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
  onSaveCar() {
    if (this.carObj.brand && this.carObj.model) {
      this.carList.push({ ...this.carObj });  // push a copy of the object
      alert('Car added successfully!');
      this.carObj = new Car()
    } else {
      alert('Please enter at least brand and model');
    }
  }

currentTab:string = '';
  onTabChange(tabName :string) {
    debugger;
    this.currentTab = tabName;

  }






//   constructor(private http: HttpClient) {}

//   carList: any[] = [];  
//   carObj: any = {
//     "carId": 0,
//     "brand": "",
//     "model": "",
//     "year": 0,
//     "color": "",
//     "dailyRate": 0,
//     "carImage": "",
//     "regNo": ""
//   };

//   getAllCars() {
//     this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars")
//       .subscribe((result: any) => {
//         this.carList = result.data; 
//       });
//   }

ngOnInit(): void {
  this.getAllCars();
  debugger;
}


// onSaveCar() {
//   this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj)
//     .subscribe((res: any) => {
//       if (res.result) {
//         alert("Car added successfully!");
//         this.getAllCars();

//         // Reset the form
//         this.carObj = {
//           "carId": 0,
//           "brand": "",
//           "model": "",
//           "year": 0,
//           "color": "",
//           "dailyRate": 0,
//           "carImage": "",
//           "regNo": ""
//         };
//       } else {
//         alert(res.message);
//       }
//     });
// }


 

  // Save new car to the database and add it to the table
  // onSaveCar() {
  //   this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj)
  //     .subscribe((res: any) => {
  //       if (res.result) {
  //         alert("Car added successfully!");
  //         this.carList.push(res.data);
  //         this.carObj = {
  //           "carId": 0,
  //           "brand": "",
  //           "model": "",
  //           "year": 0,
  //           "color": "",
  //           "dailyRate": 0,
  //           "carImage": "",
  //           "regNo": ""
  //         };
  //       } else {
  //         alert(res.message);
  //       }
  //     });
  // }

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
