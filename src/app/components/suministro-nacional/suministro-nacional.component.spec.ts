import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroNacionalComponent } from './suministro-nacional.component';

describe('SuministroNacionalComponent', () => {
  let component: SuministroNacionalComponent;
  let fixture: ComponentFixture<SuministroNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuministroNacionalComponent]
    });
    fixture = TestBed.createComponent(SuministroNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
