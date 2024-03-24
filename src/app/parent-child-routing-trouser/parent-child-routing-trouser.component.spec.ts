import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildRoutingTrouserComponent } from './parent-child-routing-trouser.component';

describe('ParentChildRoutingTrouserComponent', () => {
  let component: ParentChildRoutingTrouserComponent;
  let fixture: ComponentFixture<ParentChildRoutingTrouserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildRoutingTrouserComponent]
    });
    fixture = TestBed.createComponent(ParentChildRoutingTrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
