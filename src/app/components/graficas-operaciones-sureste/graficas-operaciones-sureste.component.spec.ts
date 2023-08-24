import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasOperacionesSuresteComponent } from './graficas-operaciones-sureste.component';

describe('GraficasOperacionesSuresteComponent', () => {
  let component: GraficasOperacionesSuresteComponent;
  let fixture: ComponentFixture<GraficasOperacionesSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasOperacionesSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasOperacionesSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
