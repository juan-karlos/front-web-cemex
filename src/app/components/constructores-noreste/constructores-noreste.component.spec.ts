import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructoresNoresteComponent } from './constructores-noreste.component';

describe('ConstructoresNoresteComponent', () => {
  let component: ConstructoresNoresteComponent;
  let fixture: ComponentFixture<ConstructoresNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructoresNoresteComponent]
    });
    fixture = TestBed.createComponent(ConstructoresNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
