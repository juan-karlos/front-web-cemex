import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdministracionUsuariosComponent } from './login-administracion-usuarios.component';

describe('LoginAdministracionUsuariosComponent', () => {
  let component: LoginAdministracionUsuariosComponent;
  let fixture: ComponentFixture<LoginAdministracionUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdministracionUsuariosComponent]
    });
    fixture = TestBed.createComponent(LoginAdministracionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
