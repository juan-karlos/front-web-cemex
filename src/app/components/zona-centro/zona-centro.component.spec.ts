import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaCentroComponent } from './zona-centro.component';

describe('ZonaCentroComponent', () => {
  let component: ZonaCentroComponent;
  let fixture: ComponentFixture<ZonaCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaCentroComponent]
    });
    fixture = TestBed.createComponent(ZonaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
