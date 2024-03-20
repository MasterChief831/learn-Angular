import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBindingComponent } from './app-binding.component';

describe('AppBindingComponent', () => {
  let component: AppBindingComponent;
  let fixture: ComponentFixture<AppBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppBindingComponent]
    });
    fixture = TestBed.createComponent(AppBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
