import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosCentroComponent } from './registros-centro.component';

describe('RegistrosCentroComponent', () => {
  let component: RegistrosCentroComponent;
  let fixture: ComponentFixture<RegistrosCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosCentroComponent]
    });
    fixture = TestBed.createComponent(RegistrosCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
