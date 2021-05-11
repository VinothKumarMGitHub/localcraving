import { Injectable } from '@angular/core';
import * as fooditems from 'src/assets/restaurant-menu.json';
import * as restaurantDetails from 'src/assets/restaurant-data.json';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor() { }

  //Get client/restaurents details
  public getRestaurants(){
    return (restaurantDetails as any).restaurants;
  } 

  //will use client/restaurents detaisl to get the food list
  public getFoodItems( client: any){
    return (fooditems as any).categorys;
  }
}
