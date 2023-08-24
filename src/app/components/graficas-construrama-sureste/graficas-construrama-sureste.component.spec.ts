import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstruramaSuresteComponent } from './graficas-construrama-sureste.component';

describe('GraficasConstruramaSuresteComponent', () => {
  let component: GraficasConstruramaSuresteComponent;
  let fixture: ComponentFixture<GraficasConstruramaSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstruramaSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasConstruramaSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
