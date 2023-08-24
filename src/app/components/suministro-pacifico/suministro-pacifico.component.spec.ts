import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroPacificoComponent } from './suministro-pacifico.component';

describe('SuministroPacificoComponent', () => {
  let component: SuministroPacificoComponent;
  let fixture: ComponentFixture<SuministroPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuministroPacificoComponent]
    });
    fixture = TestBed.createComponent(SuministroPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
