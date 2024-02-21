import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasNoOperativosNacionalComponent } from './graficas-no-operativos-nacional.component';

describe('GraficasNoOperativosNacionalComponent', () => {
  let component: GraficasNoOperativosNacionalComponent;
  let fixture: ComponentFixture<GraficasNoOperativosNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasNoOperativosNacionalComponent]
    });
    fixture = TestBed.createComponent(GraficasNoOperativosNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
