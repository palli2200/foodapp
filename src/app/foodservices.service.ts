import { HttpClient, HttpErrorResponse,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'jquery';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodservicesService {
  private _selectDriver="../assets/data/selectDriver.json"
  private _showOrders="../assets/data/showOrders.json"
  private _driverDetails="../assets/data/driverDetails.json"
  private _orderDetails="../assets/data/orderDetails.json"
  private _CategoryCards="../assets/data/cards.json"

  private _jsonServer="http://localhost:3000/posts"
  
  constructor(private _http:HttpClient) { }

  // getList(){
  //   return[
  //     {orderid:101, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:102, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:103, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:104, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:105, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:106, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:107, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:108, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:109, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:110, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:111, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:112, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:113, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:114, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:115, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:117, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:118, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:119, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:120, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:101, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:102, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:103, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:104, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:105, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:106, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:107, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:108, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:109, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:110, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:111, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:112, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:113, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:114, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:115, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:117, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:118, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:119, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  //     {orderid:120, orderby:"siva", details:"biryani(2)", address:"putlagatlagudem"},
  
  //   ]
  // }

  // getDriver(){
  //   return[
  //     {driverID:101, driverName:"nagaa"},
  //     {driverID:102, driverName:"nagaa1"},
  //     {driverID:103, driverName:"nagaa2"},
  //     {driverID:104, driverName:"nagaa3"},
  //     {driverID:105, driverName:"nagaa4"},
  //     {driverID:106, driverName:"nagaa6"},
  //     {driverID:106, driverName:"nagaa7"},
  //     {driverID:106, driverName:"nagaa8"},
  //     {driverID:106, driverName:"nagaa9"},
  //     {driverID:106, driverName:"nagaa10"},
  //     {driverID:106, driverName:"nagaa11"},
  //     {driverID:106, driverName:"nagaa12"},
  //     {driverID:106, driverName:"nagaa13"},
  //     {driverID:101, driverName:"nagaa"},
  //     {driverID:102, driverName:"nagaa1"},
  //     {driverID:103, driverName:"nagaa2"},
  //     {driverID:104, driverName:"nagaa3"},
  //     {driverID:105, driverName:"nagaa4"},
  //     {driverID:106, driverName:"nagaa6"},
  //     {driverID:106, driverName:"nagaa7"},
  //     {driverID:106, driverName:"nagaa8"},
  //     {driverID:106, driverName:"nagaa9"},
  //     {driverID:106, driverName:"nagaa10"},
  //     {driverID:106, driverName:"nagaa11"},
  //     {driverID:106, driverName:"nagaa12"},
  //     {driverID:106, driverName:"nagaa13"},
  
  
  //   ]
  // }

  getOrderDetails(){
    return this._http.get(this._orderDetails)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getSelectDriver(){
   return this._http.get(this._selectDriver)
   .pipe(
     catchError(this.errorHandler)
    )
  }

  getShowOrders(){
    return this._http.get(this._showOrders)
    .pipe(
      catchError(this.errorHandler));

  }

  getDriverDetails(){
    return this._http.get(this._driverDetails)
    .pipe(
      catchError(this.errorHandler));
  }


  getCards(){
    return this._http.get(this._CategoryCards)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  postEmploye(data : any){
    return this._http.post<any>("http://localhost:3000/posts",data)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getEmploye(){
    return this._http.get<any>("http://localhost:3000/posts")
    .pipe(
      catchError(this.errorHandler)
    );
  }

  updateEmploye(data : any, id: number){
    return this._http.put<any>("http://localhost:3000/posts"+id,data)
    .pipe(
      catchError(this.errorHandler)
    );

  }
  deleteEmploye(id : number){
    return this._http.delete<any>("http://localhost:3000/posts"+id)
    .pipe(
      catchError(this.errorHandler)
    );

  }




  errorHandler(error:HttpErrorResponse) {
    return throwError(error.message ||"unknown server error");
 }
  

  
}
