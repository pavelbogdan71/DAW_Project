import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model3DetailsComponent } from './model3-details.component';

describe('Model3DetailsComponent', () => {
  let component: Model3DetailsComponent;
  let fixture: ComponentFixture<Model3DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Model3DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Model3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
