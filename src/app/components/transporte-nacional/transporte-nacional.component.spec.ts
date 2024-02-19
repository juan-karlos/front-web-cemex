import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteNacionalComponent } from './transporte-nacional.component';

describe('TransporteNacionalComponent', () => {
  let component: TransporteNacionalComponent;
  let fixture: ComponentFixture<TransporteNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporteNacionalComponent]
    });
    fixture = TestBed.createComponent(TransporteNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
