import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesSuresteComponent } from './operaciones-sureste.component';

describe('OperacionesSuresteComponent', () => {
  let component: OperacionesSuresteComponent;
  let fixture: ComponentFixture<OperacionesSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperacionesSuresteComponent]
    });
    fixture = TestBed.createComponent(OperacionesSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
