import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPermisoComponent } from './registro-permiso.component';

describe('RegistroPermisoComponent', () => {
  let component: RegistroPermisoComponent;
  let fixture: ComponentFixture<RegistroPermisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPermisoComponent]
    });
    fixture = TestBed.createComponent(RegistroPermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
