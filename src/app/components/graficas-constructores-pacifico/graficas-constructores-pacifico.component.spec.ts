import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstructoresPacificoComponent } from './graficas-constructores-pacifico.component';

describe('GraficasConstructoresPacificoComponent', () => {
  let component: GraficasConstructoresPacificoComponent;
  let fixture: ComponentFixture<GraficasConstructoresPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstructoresPacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasConstructoresPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
