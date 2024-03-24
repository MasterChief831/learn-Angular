import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamterEmplstComponent } from './route-paramter-emplst.component';

describe('RouteParamterEmplstComponent', () => {
  let component: RouteParamterEmplstComponent;
  let fixture: ComponentFixture<RouteParamterEmplstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteParamterEmplstComponent]
    });
    fixture = TestBed.createComponent(RouteParamterEmplstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
