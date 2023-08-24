import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteCentroComponent } from './transporte-centro.component';

describe('TransporteCentroComponent', () => {
  let component: TransporteCentroComponent;
  let fixture: ComponentFixture<TransporteCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporteCentroComponent]
    });
    fixture = TestBed.createComponent(TransporteCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
