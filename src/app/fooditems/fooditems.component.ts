import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { FooddialogComponent } from '../components/fooddialog/fooddialog.component';
import { CartService } from '../_service/cart.service';
import { RestaurantsService } from '../_service/restaurants.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageboxModule } from '../components/messagebox/messagebox.module';
import { ContentObserver } from '@angular/cdk/observers';
import { MessageboxComponent } from '../components/messagebox/messagebox.component';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.scss'],
})
export class FooditemsComponent implements OnInit {
  public objRestaurants: any = [];
  public foodItems: any = [];

  public createneworder!: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public cartService: CartService,
    public restaurentService: RestaurantsService,
    private _snackBar: MatSnackBar,
    private vref: ViewContainerRef
  ) {
    this.route.queryParams.subscribe((params) => {
      this.objRestaurants = params;
      this.foodItems = this.restaurentService.getFoodItems(this.objRestaurants);
    });
  }

  public onOpenDialog(item: any): void {
    if (
      this.cartService.getSource() != null &&
      this.cartService.getSource().id != this.objRestaurants.id
    ) {
      this.askReset().then((sucess) =>
      {
        if(sucess != undefined) {
          this.cartService.clearAll();
          this.openFoodDialog(item);
        }
      });
    }else { 
      this.openFoodDialog(item);
    }
  }

  public openFoodDialog(item: any){
    const dialogRef = this.dialog.open(FooddialogComponent, {
      width: '250px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.cartService.addtoCart(result, this.objRestaurants);
      this.showMessage(
        'Item : ' +
          this.objRestaurants.name +
          '\nQuantity: ' +
          result.itemsCount +
          '\nAdded to Cart.'
      );
    });
  }

  ngOnInit(): void {}

  public async askReset() :Promise<any> {
    console.log('Opening Dialog');
    const dialogRef =  this.dialog.open(MessageboxComponent, {
      width: '250px',
      data: null,
    });
    return dialogRef.afterClosed().toPromise();
  }

  showMessage(msg: string) {
    this._snackBar.open(msg, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: ['success-snackbar'],
    });
  }
}
