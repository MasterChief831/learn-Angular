import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataApiComponent } from './fetch-data-api.component';

describe('FetchDataApiComponent', () => {
  let component: FetchDataApiComponent;
  let fixture: ComponentFixture<FetchDataApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchDataApiComponent]
    });
    fixture = TestBed.createComponent(FetchDataApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
