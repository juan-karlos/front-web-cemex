import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasOperacionesCentroComponent } from './graficas-operaciones-centro.component';

describe('GraficasOperacionesCentroComponent', () => {
  let component: GraficasOperacionesCentroComponent;
  let fixture: ComponentFixture<GraficasOperacionesCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasOperacionesCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasOperacionesCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
