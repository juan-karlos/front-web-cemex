import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosSuresteComponent } from './registros-sureste.component';

describe('RegistrosSuresteComponent', () => {
  let component: RegistrosSuresteComponent;
  let fixture: ComponentFixture<RegistrosSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosSuresteComponent]
    });
    fixture = TestBed.createComponent(RegistrosSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
