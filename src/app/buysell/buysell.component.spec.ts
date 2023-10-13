import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysellComponent } from './buysell.component';

describe('BuysellComponent', () => {
  let component: BuysellComponent;
  let fixture: ComponentFixture<BuysellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuysellComponent]
    });
    fixture = TestBed.createComponent(BuysellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
