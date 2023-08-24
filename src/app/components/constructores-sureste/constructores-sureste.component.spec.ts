import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructoresSuresteComponent } from './constructores-sureste.component';

describe('ConstructoresSuresteComponent', () => {
  let component: ConstructoresSuresteComponent;
  let fixture: ComponentFixture<ConstructoresSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructoresSuresteComponent]
    });
    fixture = TestBed.createComponent(ConstructoresSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
