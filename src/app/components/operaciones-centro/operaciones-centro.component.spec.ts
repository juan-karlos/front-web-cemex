import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesCentroComponent } from './operaciones-centro.component';

describe('OperacionesCentroComponent', () => {
  let component: OperacionesCentroComponent;
  let fixture: ComponentFixture<OperacionesCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperacionesCentroComponent]
    });
    fixture = TestBed.createComponent(OperacionesCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
