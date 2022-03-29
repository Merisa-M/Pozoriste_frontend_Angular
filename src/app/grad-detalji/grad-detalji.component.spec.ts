import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradDetaljiComponent } from './grad-detalji.component';

describe('GradDetaljiComponent', () => {
  let component: GradDetaljiComponent;
  let fixture: ComponentFixture<GradDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
