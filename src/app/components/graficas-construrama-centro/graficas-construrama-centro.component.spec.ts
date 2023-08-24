import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstruramaCentroComponent } from './graficas-construrama-centro.component';

describe('GraficasConstruramaCentroComponent', () => {
  let component: GraficasConstruramaCentroComponent;
  let fixture: ComponentFixture<GraficasConstruramaCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstruramaCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasConstruramaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
