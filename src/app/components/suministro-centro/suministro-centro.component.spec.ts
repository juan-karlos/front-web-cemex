import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroCentroComponent } from './suministro-centro.component';

describe('SuministroCentroComponent', () => {
  let component: SuministroCentroComponent;
  let fixture: ComponentFixture<SuministroCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuministroCentroComponent]
    });
    fixture = TestBed.createComponent(SuministroCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
