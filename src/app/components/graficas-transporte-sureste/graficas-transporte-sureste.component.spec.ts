import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasTransporteSuresteComponent } from './graficas-transporte-sureste.component';

describe('GraficasTransporteSuresteComponent', () => {
  let component: GraficasTransporteSuresteComponent;
  let fixture: ComponentFixture<GraficasTransporteSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasTransporteSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasTransporteSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
