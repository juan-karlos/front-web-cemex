import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaPacificoComponent } from './zona-pacifico.component';

describe('ZonaPacificoComponent', () => {
  let component: ZonaPacificoComponent;
  let fixture: ComponentFixture<ZonaPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaPacificoComponent]
    });
    fixture = TestBed.createComponent(ZonaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
