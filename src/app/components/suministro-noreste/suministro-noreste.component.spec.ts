import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroNoresteComponent } from './suministro-noreste.component';

describe('SuministroNoresteComponent', () => {
  let component: SuministroNoresteComponent;
  let fixture: ComponentFixture<SuministroNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuministroNoresteComponent]
    });
    fixture = TestBed.createComponent(SuministroNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
