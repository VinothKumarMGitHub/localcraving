import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddialogComponent } from './fooddialog.component';

describe('FooddialogComponent', () => {
  let component: FooddialogComponent;
  let fixture: ComponentFixture<FooddialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooddialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
