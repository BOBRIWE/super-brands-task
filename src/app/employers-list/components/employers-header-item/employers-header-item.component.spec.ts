import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersHeaderItemComponent } from './employers-header-item.component';

describe('EmployersHeaderItemComponent', () => {
  let component: EmployersHeaderItemComponent;
  let fixture: ComponentFixture<EmployersHeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersHeaderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
