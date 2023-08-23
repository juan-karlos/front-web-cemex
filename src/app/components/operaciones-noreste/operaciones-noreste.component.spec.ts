import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesNoresteComponent } from './operaciones-noreste.component';

describe('OperacionesNoresteComponent', () => {
  let component: OperacionesNoresteComponent;
  let fixture: ComponentFixture<OperacionesNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperacionesNoresteComponent]
    });
    fixture = TestBed.createComponent(OperacionesNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
