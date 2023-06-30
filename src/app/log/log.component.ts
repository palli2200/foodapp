import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeModel } from './log-dashboard.model';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  [x: string]: any;
  formValue !:FormGroup
  employeModelObj : EmployeModel = new EmployeModel();

title=""
model = {name:"",password:""};


  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']

    })

  }
  postEmployeDetails(){
    this.employeModelObj.firstName = this.formValue.value.firstName;
    this.employeModelObj.lastName = this.formValue.value.lastName;
    this.employeModelObj.email = this.formValue.value.email;
    this.employeModelObj.mobile = this.formValue.value.mobile;
    this.employeModelObj.salary = this.formValue.value.salary;


    this.api.postEmployeDetails(this.employeModelObj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Employee added SuccessFully")
    },
      (err: any)=>{
      alert("some thing went wrong")
      console.log(err)
    }
    )

  }


 onSubmit(){

  }

}
