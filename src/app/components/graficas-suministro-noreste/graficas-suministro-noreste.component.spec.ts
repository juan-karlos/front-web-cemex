import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasSuministroNoresteComponent } from './graficas-suministro-noreste.component';

describe('GraficasSuministroNoresteComponent', () => {
  let component: GraficasSuministroNoresteComponent;
  let fixture: ComponentFixture<GraficasSuministroNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasSuministroNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasSuministroNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
