import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteSuresteComponent } from './transporte-sureste.component';

describe('TransporteSuresteComponent', () => {
  let component: TransporteSuresteComponent;
  let fixture: ComponentFixture<TransporteSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporteSuresteComponent]
    });
    fixture = TestBed.createComponent(TransporteSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
