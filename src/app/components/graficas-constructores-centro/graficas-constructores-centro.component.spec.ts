import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstructoresCentroComponent } from './graficas-constructores-centro.component';

describe('GraficasConstructoresCentroComponent', () => {
  let component: GraficasConstructoresCentroComponent;
  let fixture: ComponentFixture<GraficasConstructoresCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstructoresCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasConstructoresCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
