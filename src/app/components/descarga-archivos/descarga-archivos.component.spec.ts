import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaArchivosComponent } from './descarga-archivos.component';

describe('DescargaArchivosComponent', () => {
  let component: DescargaArchivosComponent;
  let fixture: ComponentFixture<DescargaArchivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescargaArchivosComponent]
    });
    fixture = TestBed.createComponent(DescargaArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
