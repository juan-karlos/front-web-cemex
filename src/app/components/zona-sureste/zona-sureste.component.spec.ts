import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaSuresteComponent } from './zona-sureste.component';

describe('ZonaSuresteComponent', () => {
  let component: ZonaSuresteComponent;
  let fixture: ComponentFixture<ZonaSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaSuresteComponent]
    });
    fixture = TestBed.createComponent(ZonaSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
