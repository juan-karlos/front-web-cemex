import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasIndustrialesPacificoComponent } from './graficas-industriales-pacifico.component';

describe('GraficasIndustrialesPacificoComponent', () => {
  let component: GraficasIndustrialesPacificoComponent;
  let fixture: ComponentFixture<GraficasIndustrialesPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasIndustrialesPacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasIndustrialesPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
