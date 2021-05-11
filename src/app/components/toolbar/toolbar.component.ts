import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  public getCartItemsCount() {
    return this.cartService.getCartCount();
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  public onCheckoutClick(){
    this.router.navigateByUrl( "/checkout"   );
  }
}
