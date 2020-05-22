import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersItemComponent } from './employers-item.component';

describe('EmployersItemComponent', () => {
  let component: EmployersItemComponent;
  let fixture: ComponentFixture<EmployersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
