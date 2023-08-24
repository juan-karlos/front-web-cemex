import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOperativosCentroComponent } from './no-operativos-centro.component';

describe('NoOperativosCentroComponent', () => {
  let component: NoOperativosCentroComponent;
  let fixture: ComponentFixture<NoOperativosCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoOperativosCentroComponent]
    });
    fixture = TestBed.createComponent(NoOperativosCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
