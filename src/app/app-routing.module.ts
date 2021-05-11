import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AuthGuard } from './_service/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {
    path: 'feedlocal',
    component: RestaurantComponent,
    canActivate: [AuthGuard],
    data: { title: 'Local Restaurents' },
  },
  {
    path: 'fooditems',
    component: FooditemsComponent,
    canActivate: [AuthGuard],
    data: { title: 'Food Items' },
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    data: { title: 'Checkout' },
  },
  {
    path: 'card',
    component: InfoCardComponent,
    canActivate: [AuthGuard],
    data: { title: 'Checkout' },
  },
  { path: '', component: LoginComponent, data: { title: 'Login' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
