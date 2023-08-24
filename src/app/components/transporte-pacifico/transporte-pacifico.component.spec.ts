import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportePacificoComponent } from './transporte-pacifico.component';

describe('TransportePacificoComponent', () => {
  let component: TransportePacificoComponent;
  let fixture: ComponentFixture<TransportePacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportePacificoComponent]
    });
    fixture = TestBed.createComponent(TransportePacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
