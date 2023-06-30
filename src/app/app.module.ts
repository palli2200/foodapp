import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, myRoutings } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { CeptertestingInterceptor } from './ceptertesting.interceptor';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    myRoutings,
    EmployeeDashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CeptertestingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
