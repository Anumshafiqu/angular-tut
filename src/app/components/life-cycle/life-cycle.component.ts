import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: false,
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy{
  
  // When it runs: After the constructor is called and Angular has initialized all the component’s inputs.

//  Purpose: Best place to initialize data, call APIs, or set up logic when the component is ready 
  ngOnInit(): void {
    console.log("ngonit")
  }
  // When it runs: After Angular has projected external content into the component using <ng-content>.

 //Purpose: If your component has projected content, and you want to interact with it. 
 //  "External content is now inserted — you can work with it."
  ngAfterContentInit(): void {
   console.log('ngAftercontentinit')
  }
  // When it runs: After every check Angular does to detect changes inside projected content (<ng-content>).

// Purpose: If you need to react every time the projected content changes.


  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  // When it runs: After the component's view (template) and its child components' views are fully initialized.

 //Purpose: Safely access elements in the view using @ViewChild() or @ViewChildren().
  ngAfterViewInit(): void {
  console.log('ngAfterViewInit')
  }
  // When it runs: After every check Angular does on the component's view and child views.

// Purpose: To detect view changes.
  ngAfterViewChecked(): void {
  console.log('ngafterviewchecked')
  }
  // When it runs: Just before Angular destroys the component.
//Purpose: Cleanup tasks like unsubscribe from Observables, clear intervals, detach event listeners to avoid memory leaks.
 //"Component is going to be destroyed — clean up everything!"
  ngOnDestroy(): void {
    console.log('ngondestroy')
  }


}
