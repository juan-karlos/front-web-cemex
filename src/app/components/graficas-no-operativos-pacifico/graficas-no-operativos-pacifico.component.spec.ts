import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasNoOperativosPacificoComponent } from './graficas-no-operativos-pacifico.component';

describe('GraficasNoOperativosPacificoComponent', () => {
  let component: GraficasNoOperativosPacificoComponent;
  let fixture: ComponentFixture<GraficasNoOperativosPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasNoOperativosPacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasNoOperativosPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
