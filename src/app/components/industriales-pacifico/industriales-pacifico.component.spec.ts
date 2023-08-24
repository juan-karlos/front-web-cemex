import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialesPacificoComponent } from './industriales-pacifico.component';

describe('IndustrialesPacificoComponent', () => {
  let component: IndustrialesPacificoComponent;
  let fixture: ComponentFixture<IndustrialesPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialesPacificoComponent]
    });
    fixture = TestBed.createComponent(IndustrialesPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
