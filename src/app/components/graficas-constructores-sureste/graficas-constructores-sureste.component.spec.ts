import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstructoresSuresteComponent } from './graficas-constructores-sureste.component';

describe('GraficasConstructoresSuresteComponent', () => {
  let component: GraficasConstructoresSuresteComponent;
  let fixture: ComponentFixture<GraficasConstructoresSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstructoresSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasConstructoresSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
