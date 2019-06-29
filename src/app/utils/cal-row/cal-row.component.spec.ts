import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalRowComponent } from './cal-row.component';

describe('CalRowComponent', () => {
  let component: CalRowComponent;
  let fixture: ComponentFixture<CalRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
