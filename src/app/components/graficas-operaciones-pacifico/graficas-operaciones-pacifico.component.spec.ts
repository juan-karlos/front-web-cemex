import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasOperacionesPacificoComponent } from './graficas-operaciones-pacifico.component';

describe('GraficasOperacionesPacificoComponent', () => {
  let component: GraficasOperacionesPacificoComponent;
  let fixture: ComponentFixture<GraficasOperacionesPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasOperacionesPacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasOperacionesPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
