import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDescriptionComponent } from './employer-description.component';

describe('EmployerDescriptionComponent', () => {
  let component: EmployerDescriptionComponent;
  let fixture: ComponentFixture<EmployerDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
