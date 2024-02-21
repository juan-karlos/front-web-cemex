import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesNacionalComponent } from './operaciones-nacional.component';

describe('OperacionesNacionalComponent', () => {
  let component: OperacionesNacionalComponent;
  let fixture: ComponentFixture<OperacionesNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperacionesNacionalComponent]
    });
    fixture = TestBed.createComponent(OperacionesNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
