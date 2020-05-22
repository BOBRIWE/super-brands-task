import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersItemEmptyComponent } from './employers-item-empty.component';

describe('EmployersItemEmptyComponent', () => {
  let component: EmployersItemEmptyComponent;
  let fixture: ComponentFixture<EmployersItemEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersItemEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersItemEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
