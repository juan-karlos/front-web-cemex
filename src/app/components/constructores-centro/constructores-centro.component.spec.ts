import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructoresCentroComponent } from './constructores-centro.component';

describe('ConstructoresCentroComponent', () => {
  let component: ConstructoresCentroComponent;
  let fixture: ComponentFixture<ConstructoresCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructoresCentroComponent]
    });
    fixture = TestBed.createComponent(ConstructoresCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
