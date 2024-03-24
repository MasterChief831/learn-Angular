import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamterEmpdetailComponent } from './route-paramter-empdetail.component';

describe('RouteParamterEmpdetailComponent', () => {
  let component: RouteParamterEmpdetailComponent;
  let fixture: ComponentFixture<RouteParamterEmpdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteParamterEmpdetailComponent]
    });
    fixture = TestBed.createComponent(RouteParamterEmpdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
