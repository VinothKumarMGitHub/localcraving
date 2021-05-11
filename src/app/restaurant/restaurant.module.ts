import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { InfoCardModule } from '../components/info-card/info-card.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RestaurantFilterPipe } from '../pipes/restaurant-filter.pipe';

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantFilterPipe

  ],
  imports: [
    CommonModule,
    BrowserModule,

    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,

    InfoCardModule ,
  ],
  providers:[RestaurantFilterPipe]
})
export class RestaurantModule { }
