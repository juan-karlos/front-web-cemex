import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialesNoresteComponent } from './industriales-noreste.component';

describe('IndustrialesNoresteComponent', () => {
  let component: IndustrialesNoresteComponent;
  let fixture: ComponentFixture<IndustrialesNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialesNoresteComponent]
    });
    fixture = TestBed.createComponent(IndustrialesNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
