import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.scss']
})
export class RestaurantdetailsComponent implements OnInit {
  showdetails=true;
  @Output() back = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  backToHome(){
    this.back.emit();
  }
  

}
