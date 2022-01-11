import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelxDetailsComponent } from './modelx-details.component';

describe('ModelxDetailsComponent', () => {
  let component: ModelxDetailsComponent;
  let fixture: ComponentFixture<ModelxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelxDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
