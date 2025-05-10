import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { SignalsComponent } from './components/signals/signals.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetApiComponent } from './components/get-api/get-api.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { PostApiComponent } from './components/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipeNaPipe } from './components/pipe-na.pipe';
import { ProgressBarComponent } from './reusable/progress-bar/progress-bar.component';
import { TabsComponent } from './reusable/tabs/tabs.component';
import { TempContainerComponent } from './components/temp-container/temp-container.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { tokenInterceptor } from './components/intercepter/token.interceptor';
import { errorInterceptor } from './components/intercepter/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    ControlStatementComponent,
    DatabindingComponent,
    SignalsComponent,
    LinkedSignalComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    GetApiComponent,
    PostApiComponent,
    ResourceApiComponent,
    CustomerComponent,
    LifeCycleComponent,
    PipeNaPipe,
    ProgressBarComponent,
    TabsComponent,
    TempContainerComponent,
    LoginComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ provideHttpClient(withInterceptors([tokenInterceptor,errorInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
