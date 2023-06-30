import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { FoodservicesService } from '../foodservices.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orderDetailsData=[] as any
  public SelectDriverData=[] as any;
 
  public errMsg:any
  
  constructor(private _serv:FoodservicesService) { }
   
   
  ngOnInit(): void {
    this._serv.getOrderDetails().subscribe(
      (data)=>{this.orderDetailsData = data},
      (error)=>{this.errMsg = error}
    )
  //  this.orderDetailsData = this._serv.getList()
    // this.driverList = this._serv.getDriver()
    this._serv.getSelectDriver().subscribe(
      (data: any) => {this.SelectDriverData = data},
      (error)=> { this.errMsg = error}
      
      )
    

    
  }



}
