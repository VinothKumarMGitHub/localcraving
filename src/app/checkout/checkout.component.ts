import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../_service/cart.service';
import { NotificationService } from '../_service/notification.service';
import { PaymentsService } from '../_service/payments.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public totalCost: number = 0;
  public tipPercentage: number = 18;
  public tipsList: any[] = [2, 3, 5, 10, 18, 25];

  constructor(
    private cartService: CartService,
    private paymentService: PaymentsService,
    private notifyService: NotificationService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public getCostSplit() {
    let split = this.cartService.getCostSplit();
    this.totalCost = 0;
    split.forEach((item) => {
      this.totalCost += item[1];
    });

    return split;
  }

  public getTip() {
    return (this.totalCost * this.tipPercentage) / 100;
  }

  public getTotal() {
    return this.totalCost + this.getTip();
  }

  public getDeliveryLocation() {
    let source = this.cartService.getSource();
    if (source == null || source == undefined) return '';
    return source.name + '   -   (' + source.address + ')';
  }

  public getCart() {
    return this.cartService.getCart();
  }

  public onTipClick(value: any) {
    this.tipPercentage = Number(value);
  }

  public onCustomTipClick() {}

  public onPurchase() {

    this.paymentService.processPayment(this.getTotal());
    this.notifyService.notifyClient(this.cartService.getSource());

    this.cartService.clearAll();
    this.router.navigateByUrl( '/feedlocal' );

    this.ShowMessage( "Thanks for placing the Order. Your Order is on the way.")

  }

  ShowMessage(msg: string) {
    this._snackBar.open( msg,  "success", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration : 2000
    });
  }
}
