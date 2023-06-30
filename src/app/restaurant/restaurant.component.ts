import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  showdetailscat=true;
  @Output() gback = new EventEmitter();

  testModal: any;
  title = 'Add Driver';
  showdetails=false;
  model = {name:"",aadhar:"",phoneNumber:"", details:""};
 
 

  constructor(private modalService: NgbModal,private _rout:ActivatedRoute ,private _router:Router) { }

  ngOnInit(): void {
  }
  addRestrauntModal(content: any){
    this.title = 'Add Restaurant';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log('checkking', result)
        this.model = {name:"",aadhar:"",phoneNumber:"", details:""};
        if(result==='Save'){
          this.addDriver()
          
        }
    }, (reason) => {
     
    });
  }
  addDriver(){
    console.log("data", this.model)

  };
  onSubmit(){

  }

  child(){
    this.showdetails = true;
  }
  back(){
    this.showdetails = false;
  }
  backToHome(){
    // this.back.emit();
  }
 

}
