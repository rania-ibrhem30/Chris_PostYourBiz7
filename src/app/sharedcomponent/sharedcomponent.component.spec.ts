import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedcomponentComponent } from './sharedcomponent.component';

describe('SharedcomponentComponent', () => {
  let component: SharedcomponentComponent;
  let fixture: ComponentFixture<SharedcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedcomponentComponent]
    });
    fixture = TestBed.createComponent(SharedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
