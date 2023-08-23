import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructoresPacificoComponent } from './constructores-pacifico.component';

describe('ConstructoresPacificoComponent', () => {
  let component: ConstructoresPacificoComponent;
  let fixture: ComponentFixture<ConstructoresPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructoresPacificoComponent]
    });
    fixture = TestBed.createComponent(ConstructoresPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
