import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstruramaNoresteComponent } from './graficas-construrama-noreste.component';

describe('GraficasConstruramaNoresteComponent', () => {
  let component: GraficasConstruramaNoresteComponent;
  let fixture: ComponentFixture<GraficasConstruramaNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstruramaNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasConstruramaNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
