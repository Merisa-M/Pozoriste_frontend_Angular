import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrDetaljiComponent } from './zanr-detalji.component';

describe('ZanrDetaljiComponent', () => {
  let component: ZanrDetaljiComponent;
  let fixture: ComponentFixture<ZanrDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanrDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanrDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
