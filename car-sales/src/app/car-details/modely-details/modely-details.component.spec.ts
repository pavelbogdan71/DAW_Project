import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelyDetailsComponent } from './modely-details.component';

describe('ModelyDetailsComponent', () => {
  let component: ModelyDetailsComponent;
  let fixture: ComponentFixture<ModelyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
