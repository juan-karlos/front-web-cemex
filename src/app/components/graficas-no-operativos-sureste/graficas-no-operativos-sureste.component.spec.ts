import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasNoOperativosSuresteComponent } from './graficas-no-operativos-sureste.component';

describe('GraficasNoOperativosSuresteComponent', () => {
  let component: GraficasNoOperativosSuresteComponent;
  let fixture: ComponentFixture<GraficasNoOperativosSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasNoOperativosSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasNoOperativosSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
