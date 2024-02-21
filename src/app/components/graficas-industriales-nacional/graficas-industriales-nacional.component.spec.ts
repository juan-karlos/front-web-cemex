import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasIndustrialesNacionalComponent } from './graficas-industriales-nacional.component';

describe('GraficasIndustrialesNacionalComponent', () => {
  let component: GraficasIndustrialesNacionalComponent;
  let fixture: ComponentFixture<GraficasIndustrialesNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasIndustrialesNacionalComponent]
    });
    fixture = TestBed.createComponent(GraficasIndustrialesNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
