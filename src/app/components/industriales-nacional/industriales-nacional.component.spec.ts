import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialesNacionalComponent } from './industriales-nacional.component';

describe('IndustrialesNacionalComponent', () => {
  let component: IndustrialesNacionalComponent;
  let fixture: ComponentFixture<IndustrialesNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialesNacionalComponent]
    });
    fixture = TestBed.createComponent(IndustrialesNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
