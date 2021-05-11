import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private cartItems: any[] = [];
  private totalCost: number = 0;
  private source: any = undefined;

  public addtoCart(cartitem: any, source: any) {

    // if( this.source != undefined && source.name != this.source.name){
    //   return false;
    // }

    this.source = source;

    this.cartItems.push(cartitem);

    this.totalCost += ( cartitem.itemsCount * Number(cartitem.data.subitems[0].price));

    return true;
  }

  public getSource(){
    return this.source;
  }

  public removefromCart(cartitem: any) {
    this.cartItems.forEach((element: any) => {
      if (element.id == cartitem.data.id) {
        this.cartItems.slice(element);
      }
    });
  }

  public getCart(){
    return this.cartItems;
  }

  public getCartCount() {
    return this.cartItems.length;
  }

  public clearAll() {
    this.cartItems = [];
    this.source = null;
    this.totalCost = 0;
  }

  public getCostSplit(){
     let result: any[] = [];
     
     result.push( ["Original Subtotal", this.totalCost] );
     result.push( ["Delivery Fee",   ((this.totalCost * 1.7) / 100) ] );
     result.push( ["Service Fee",   ((this.totalCost * 1.2) / 100) ] );
     result.push( ["Taxes", ((this.totalCost * 3) / 100)] );
     
     return result;
  }

  
}
