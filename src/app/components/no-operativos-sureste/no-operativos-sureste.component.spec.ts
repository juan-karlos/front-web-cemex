import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOperativosSuresteComponent } from './no-operativos-sureste.component';

describe('NoOperativosSuresteComponent', () => {
  let component: NoOperativosSuresteComponent;
  let fixture: ComponentFixture<NoOperativosSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoOperativosSuresteComponent]
    });
    fixture = TestBed.createComponent(NoOperativosSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
