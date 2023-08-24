import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteNoresteComponent } from './transporte-noreste.component';

describe('TransporteNoresteComponent', () => {
  let component: TransporteNoresteComponent;
  let fixture: ComponentFixture<TransporteNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporteNoresteComponent]
    });
    fixture = TestBed.createComponent(TransporteNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
