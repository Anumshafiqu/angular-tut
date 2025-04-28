import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { SignalsComponent } from './components/signals/signals.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

const routes: Routes = [
  {path : '', component:NgIfComponent},
   {path :'databinding' , component : DatabindingComponent},
  {path : 'ng-if', component:NgIfComponent},
  {path : 'control-statement', component:ControlStatementComponent},
  {path : 'ng-style', component: NgStyleComponent},
  {path : 'ng-class', component:NgClassComponent},
  {path : 'ng-for', component:NgForComponent},
  {path : 'signals', component:SignalsComponent},
  {path : 'linked-signal', component:LinkedSignalComponent},
  {path : 'template-form', component:TemplateFormComponent},
  {path : 'reactive-form', component: ReactiveFormComponent},
  {path : 'get-api', component: GetApiComponent},
  {path : 'Post-api', component: PostApiComponent},
  {path : 'Resource-api', component: ResourceApiComponent},
  {path : 'customer', component: CustomerComponent},
  {path : 'life-cycle', component: LifeCycleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
