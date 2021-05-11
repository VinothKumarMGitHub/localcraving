import { Component } from '@angular/core';
import { AuthenticationService } from './_service/authentication.service';
import { CartService } from './_service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fooddelivery';

  constructor(
    private authenticationService: AuthenticationService,
    public cartService: CartService
  ) {}

  public showToolbar() {
    return this.authenticationService.loggedIn;
  }

  public getCartCount(){
    return this.cartService.getCartCount();
  }
}
