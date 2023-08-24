import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOperativosNoresteComponent } from './no-operativos-noreste.component';

describe('NoOperativosNoresteComponent', () => {
  let component: NoOperativosNoresteComponent;
  let fixture: ComponentFixture<NoOperativosNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoOperativosNoresteComponent]
    });
    fixture = TestBed.createComponent(NoOperativosNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
