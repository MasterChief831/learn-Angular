import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildRoutingProductsComponent } from './parent-child-routing-products.component';

describe('ParentChildRoutingProductsComponent', () => {
  let component: ParentChildRoutingProductsComponent;
  let fixture: ComponentFixture<ParentChildRoutingProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildRoutingProductsComponent]
    });
    fixture = TestBed.createComponent(ParentChildRoutingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
