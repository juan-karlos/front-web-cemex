import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesPacificoComponent } from './operaciones-pacifico.component';

describe('OperacionesPacificoComponent', () => {
  let component: OperacionesPacificoComponent;
  let fixture: ComponentFixture<OperacionesPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperacionesPacificoComponent]
    });
    fixture = TestBed.createComponent(OperacionesPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
