import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DriversComponent } from './drivers/drivers.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GroceryComponent } from './grocery/grocery.component';
import { LogComponent } from './log/log.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MilkcentersComponent } from './milkcenters/milkcenters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes =[
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', 
    component:CategoryComponent, 
    children:[
      { path: 'restaurant', component:RestaurantComponent, 
      children:[
        {path: 'restaurantdetails', component:RestaurantdetailsComponent},
      ]}
    ]
  },
  { path: 'orders', component:OrdersComponent },
  { path: 'milk', component:MilkcentersComponent},
  { path: 'grocery', component:GroceryComponent },
  { path: 'vegetables', component: VegetablesComponent},
  { path: 'rest', component:RestaurantComponent},
  {path: 'drivers', component:DriversComponent},
  {path: 'log', component:LogComponent},

  { path: '**', component:PagenotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings =[
  LoginpageComponent,
  ForgotpasswordComponent,
  DashboardComponent,
  RestaurantComponent,
  RestaurantdetailsComponent,
  OrdersComponent,
  DriversComponent,
  LogComponent,
  PagenotfoundComponent,
  CategoryComponent,
  MilkcentersComponent,
  // PieChartComponent,
  CustomDirectiveDirective,
  NavbarComponent,
  DatepickerComponent,
  CategoryComponent,
  MilkcentersComponent,
  GroceryComponent,
  VegetablesComponent,
]
