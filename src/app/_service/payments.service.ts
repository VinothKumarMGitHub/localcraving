import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor() { }

  public addPaymentCard(cardDetails:any){
  }

  public removePaymentCard(cardDetails:any){
  }

  public processPayment(amount:number){

  }

  public getActivePaymentCard(){
    return "Visa ending 2212";
  }
}

