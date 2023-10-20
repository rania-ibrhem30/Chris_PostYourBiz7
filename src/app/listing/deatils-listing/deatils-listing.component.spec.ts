import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsListingComponent } from './deatils-listing.component';

describe('DeatilsListingComponent', () => {
  let component: DeatilsListingComponent;
  let fixture: ComponentFixture<DeatilsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeatilsListingComponent]
    });
    fixture = TestBed.createComponent(DeatilsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
