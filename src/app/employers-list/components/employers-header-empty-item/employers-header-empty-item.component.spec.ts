import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersHeaderEmptyItemComponent } from './employers-header-empty-item.component';

describe('EmployersHeaderEmptyItemComponent', () => {
  let component: EmployersHeaderEmptyItemComponent;
  let fixture: ComponentFixture<EmployersHeaderEmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersHeaderEmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersHeaderEmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
