import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoCardModel } from '../components/info-card/model';
import { AuthenticationService } from '../_service/authentication.service';
import { RestaurantsService } from '../_service/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  public restaurants: any = [];
  public filterButtons: any = [
    {
      name: 'Chinese',
      id: 'Chinese',
      image: 'chinese.png',
    },
    {
      name: 'Bakery',
      id: 'Bakery',
      image: 'bakery.png',
    },
    {
      name: 'Coffee and Tea',
      id: 'CoffeeandTea',
      image: 'coffeeandtea.png',
    },
    {
      name: 'American',
      id: 'American',
      image: 'american.png',
    },
    {
      name: 'Japanese',
      id: 'Japanese',
      image: 'japanese.png',
    },
    {
      name: 'Sushi',
      id: 'Sushi',
      image: 'sushi.png',
    },
    {
      name: 'Asian',
      id: 'Asian',
      image: 'asian.png',
    },
    {
      name: 'Indian',
      id: 'Indian',
      image: 'indian.png',
    },
    {
      name: 'Greek',
      id: 'Greek',
      image: 'greek.png',
    },
    {
      name: 'Italian',
      id: 'Italian',
      image: 'italian.png',
    },
    {
      name: 'All',
      id: 'All',
      image: 'top_eats.png',
    },
  ];

  public filterargs: string = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private restaurantService: RestaurantsService
  ) {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  ngOnInit() {
     
  }

  public onFilterButtonClick(item: any) {
    this.filterargs = item.name;
  }

  public onRestaurantsClick(item: any) {
    console.log(item);
    this.router.navigate(['/fooditems'], { queryParams: item });
  }
}
