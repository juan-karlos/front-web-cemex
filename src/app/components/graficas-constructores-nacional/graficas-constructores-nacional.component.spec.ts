import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstructoresNacionalComponent } from './graficas-constructores-nacional.component';

describe('GraficasConstructoresNacionalComponent', () => {
  let component: GraficasConstructoresNacionalComponent;
  let fixture: ComponentFixture<GraficasConstructoresNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstructoresNacionalComponent]
    });
    fixture = TestBed.createComponent(GraficasConstructoresNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
