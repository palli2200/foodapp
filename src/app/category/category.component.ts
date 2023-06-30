import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodservicesService } from '../foodservices.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
   public CardsData=[] as any

  public errMsg:any


   

  constructor(private route: ActivatedRoute, private router: Router, private _serv: FoodservicesService ) { }

  ngOnInit(): void {
    this._serv.getCards().subscribe((data ) => { this.CardsData =data},
    (error)=> { this.errMsg = error})
  }
  goto(){
      this.router.navigate(['Restaurant'], {relativeTo:this.route});
  }

}
