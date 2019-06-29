import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCellComponent } from './cal-cell.component';

describe('CalCellComponent', () => {
  let component: CalCellComponent;
  let fixture: ComponentFixture<CalCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
