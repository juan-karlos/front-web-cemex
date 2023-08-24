import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialesSuresteComponent } from './industriales-sureste.component';

describe('IndustrialesSuresteComponent', () => {
  let component: IndustrialesSuresteComponent;
  let fixture: ComponentFixture<IndustrialesSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialesSuresteComponent]
    });
    fixture = TestBed.createComponent(IndustrialesSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
