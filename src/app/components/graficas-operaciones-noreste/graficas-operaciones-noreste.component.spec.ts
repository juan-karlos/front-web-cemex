import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasOperacionesNoresteComponent } from './graficas-operaciones-noreste.component';

describe('GraficasOperacionesNoresteComponent', () => {
  let component: GraficasOperacionesNoresteComponent;
  let fixture: ComponentFixture<GraficasOperacionesNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasOperacionesNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasOperacionesNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
