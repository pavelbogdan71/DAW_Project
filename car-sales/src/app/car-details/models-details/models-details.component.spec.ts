import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsDetailsComponent } from './models-details.component';

describe('ModelsDetailsComponent', () => {
  let component: ModelsDetailsComponent;
  let fixture: ComponentFixture<ModelsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
