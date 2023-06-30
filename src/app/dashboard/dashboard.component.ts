import { Component, OnInit } from '@angular/core';

import { FoodservicesService } from '../foodservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'appBootstrap';
  public ShowOrdersData =[] as any;
  public errMsg: any;
  model: any;
  constructor(private _serv:FoodservicesService) {
  
  }
  

  ngOnInit(): void {
    this._serv.getShowOrders().subscribe((data)=>{this.ShowOrdersData = data},
    error => {this.errMsg = error}
    
    )

       
  }

}