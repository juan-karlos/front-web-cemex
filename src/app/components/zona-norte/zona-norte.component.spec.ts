import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaNorteComponent } from './zona-norte.component';

describe('ZonaNorteComponent', () => {
  let component: ZonaNorteComponent;
  let fixture: ComponentFixture<ZonaNorteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaNorteComponent]
    });
    fixture = TestBed.createComponent(ZonaNorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
