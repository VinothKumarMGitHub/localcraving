import { Component, Input, OnInit } from '@angular/core';
import { InfoCardModel } from './model';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {


  @Input()
  get data(): any { return this.objInfoCard; }
  set data(data: any) {
    this.objInfoCard = data;
  }

  constructor() { 
    this.objInfoCard = InfoCardModel.defaultObject();
  }

  public objInfoCard: any;  
  

  ngOnInit(): void {
  }

  public getRatings(reviews : any) {
    return 4.2;
  }

}
