import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasNoOperativosCentroComponent } from './graficas-no-operativos-centro.component';

describe('GraficasNoOperativosCentroComponent', () => {
  let component: GraficasNoOperativosCentroComponent;
  let fixture: ComponentFixture<GraficasNoOperativosCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasNoOperativosCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasNoOperativosCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
