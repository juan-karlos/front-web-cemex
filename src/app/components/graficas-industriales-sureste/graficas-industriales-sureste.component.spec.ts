import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasIndustrialesSuresteComponent } from './graficas-industriales-sureste.component';

describe('GraficasIndustrialesSuresteComponent', () => {
  let component: GraficasIndustrialesSuresteComponent;
  let fixture: ComponentFixture<GraficasIndustrialesSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasIndustrialesSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasIndustrialesSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
