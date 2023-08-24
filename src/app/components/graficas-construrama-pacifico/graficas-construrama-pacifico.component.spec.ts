import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstruramaPacificoComponent } from './graficas-construrama-pacifico.component';

describe('GraficasConstruramaPacificoComponent', () => {
  let component: GraficasConstruramaPacificoComponent;
  let fixture: ComponentFixture<GraficasConstruramaPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstruramaPacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasConstruramaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
