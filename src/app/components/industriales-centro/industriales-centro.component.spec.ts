import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialesCentroComponent } from './industriales-centro.component';

describe('IndustrialesCentroComponent', () => {
  let component: IndustrialesCentroComponent;
  let fixture: ComponentFixture<IndustrialesCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialesCentroComponent]
    });
    fixture = TestBed.createComponent(IndustrialesCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
