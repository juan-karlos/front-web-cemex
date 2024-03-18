import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarContraComponent } from './actualizar-contra.component';

describe('ActualizarContraComponent', () => {
  let component: ActualizarContraComponent;
  let fixture: ComponentFixture<ActualizarContraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarContraComponent]
    });
    fixture = TestBed.createComponent(ActualizarContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
