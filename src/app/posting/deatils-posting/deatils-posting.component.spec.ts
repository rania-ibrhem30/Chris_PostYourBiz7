import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsPostingComponent } from './deatils-posting.component';

describe('DeatilsPostingComponent', () => {
  let component: DeatilsPostingComponent;
  let fixture: ComponentFixture<DeatilsPostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeatilsPostingComponent]
    });
    fixture = TestBed.createComponent(DeatilsPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
