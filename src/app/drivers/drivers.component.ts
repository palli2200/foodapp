import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { FoodservicesService } from '../foodservices.service';
  


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  testModal: any;
  title = 'Add Driver';
  model = {name:"",aadhar:"",phoneNumber:"", details:""};
  public driverDetailsData = [] as any
  public errMsg: any;
  // driversData1 = [
  //   {driverId:'101',name:'siva', aadhar:'1234567890', phoneNumber:'9876543234',details:'qwertyuiop' },
  //   {driverId:'102',name:'siva Krishna', aadhar:'12345678909876', phoneNumber:'9875654345',details:'asdfghjkl' },
  //   {driverId:'103',name:'Naga',aadhar:'352591890376',phoneNumber:'8179788870',details:'Putlagatlagudem'},
  //   {driverId:'104',name:'Anjaneyulu',aadhar:'90108060125167',phoneNumber:'9877888237',details:'Putlagatlagudem'},
  //   {driverId:'105',name:'PNA',aadhar:'3525567899998765436',phoneNumber:'8799537902',details:'Putlagatlagudem'},
  //   {driverId:'102',name:'siva Krishna', aadhar:'12345678909876', phoneNumber:'9875654345',details:'asdfghjkl' },
  //   {driverId:'103',name:'Naga',aadhar:'352591890376',phoneNumber:'8179788870',details:'Putlagatlagudem'},
  //   {driverId:'104',name:'Anjaneyulu',aadhar:'90108060125167',phoneNumber:'9877888237',details:'Putlagatlagudem'},
  //   {driverId:'105',name:'PNA',aadhar:'3525567899998765436',phoneNumber:'8799537902',details:'Putlagatlagudem'},
  //   {driverId:'102',name:'siva Krishna', aadhar:'12345678909876', phoneNumber:'9875654345',details:'asdfghjkl' },
  //   {driverId:'103',name:'Naga',aadhar:'352591890376',phoneNumber:'8179788870',details:'Putlagatlagudem'},
  //   {driverId:'104',name:'Anjaneyulu',aadhar:'90108060125167',phoneNumber:'9877888237',details:'Putlagatlagudem'},
  //   {driverId:'105',name:'PNA',aadhar:'3525567899998765436',phoneNumber:'8799537902',details:'Putlagatlagudem'}

  // ]
  constructor(private modalService: NgbModal, private _serv:FoodservicesService) { }

  ngOnInit(): void {
    this._serv.getDriverDetails().subscribe(
      (data)=>{this.driverDetailsData = data},
      (error) =>{this.errMsg = error}

    
    )
    
  }
    openModal(content: any){
      this.title = 'Add Driver';
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          console.log('checkking', result)
          this.model = {name:"",aadhar:"",phoneNumber:"", details:""};
          if(result==='Save'){
            this.addDriver()
            
          }
      }, (reason) => {
       
      });
    }
    editModal(content: any,record: any){
      this.title = 'Update Driver';
      this.model = record;
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

}
