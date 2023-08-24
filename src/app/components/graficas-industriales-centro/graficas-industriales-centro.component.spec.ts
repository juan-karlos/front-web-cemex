import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasIndustrialesCentroComponent } from './graficas-industriales-centro.component';

describe('GraficasIndustrialesCentroComponent', () => {
  let component: GraficasIndustrialesCentroComponent;
  let fixture: ComponentFixture<GraficasIndustrialesCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasIndustrialesCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasIndustrialesCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
