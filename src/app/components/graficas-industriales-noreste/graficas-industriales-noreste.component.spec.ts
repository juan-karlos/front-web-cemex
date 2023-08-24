import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasIndustrialesNoresteComponent } from './graficas-industriales-noreste.component';

describe('GraficasIndustrialesNoresteComponent', () => {
  let component: GraficasIndustrialesNoresteComponent;
  let fixture: ComponentFixture<GraficasIndustrialesNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasIndustrialesNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasIndustrialesNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
