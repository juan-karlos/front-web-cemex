import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalComponent } from './nacional.component';

describe('NacionalComponent', () => {
  let component: NacionalComponent;
  let fixture: ComponentFixture<NacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NacionalComponent]
    });
    fixture = TestBed.createComponent(NacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
