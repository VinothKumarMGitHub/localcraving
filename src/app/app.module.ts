import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutModule } from './checkout/checkout.module';
import { FooditemsModule } from './fooditems/fooditems.module';
import { LoginModule } from './login/login.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AuthenticationService } from './_service/authentication.service';
 
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { InfoCardModule } from './components/info-card/info-card.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { RestaurantFilterPipe } from './pipes/restaurant-filter.pipe';
import { FooddialogModule } from './components/fooddialog/fooddialog.module';
import { CartService } from './_service/cart.service';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { MessageboxModule } from './components/messagebox/messagebox.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    LoginModule,
    InfoCardModule,
    RestaurantModule,
    ToolbarModule,
    FooddialogModule,
    MessageboxModule,
    CheckoutModule
  ],
  providers: [AuthenticationService, CartService, RestaurantFilterPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
