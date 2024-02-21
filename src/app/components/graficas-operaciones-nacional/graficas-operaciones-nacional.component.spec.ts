import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasOperacionesNacionalComponent } from './graficas-operaciones-nacional.component';

describe('GraficasOperacionesNacionalComponent', () => {
  let component: GraficasOperacionesNacionalComponent;
  let fixture: ComponentFixture<GraficasOperacionesNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasOperacionesNacionalComponent]
    });
    fixture = TestBed.createComponent(GraficasOperacionesNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
