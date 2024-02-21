import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructoresNacionalComponent } from './constructores-nacional.component';

describe('ConstructoresNacionalComponent', () => {
  let component: ConstructoresNacionalComponent;
  let fixture: ComponentFixture<ConstructoresNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructoresNacionalComponent]
    });
    fixture = TestBed.createComponent(ConstructoresNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
