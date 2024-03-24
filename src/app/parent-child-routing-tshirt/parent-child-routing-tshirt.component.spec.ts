import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildRoutingTshirtComponent } from './parent-child-routing-tshirt.component';

describe('ParentChildRoutingTshirtComponent', () => {
  let component: ParentChildRoutingTshirtComponent;
  let fixture: ComponentFixture<ParentChildRoutingTshirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildRoutingTshirtComponent]
    });
    fixture = TestBed.createComponent(ParentChildRoutingTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
