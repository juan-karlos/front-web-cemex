import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroSuresteComponent } from './suministro-sureste.component';

describe('SuministroSuresteComponent', () => {
  let component: SuministroSuresteComponent;
  let fixture: ComponentFixture<SuministroSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuministroSuresteComponent]
    });
    fixture = TestBed.createComponent(SuministroSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
