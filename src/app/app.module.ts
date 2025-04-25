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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
