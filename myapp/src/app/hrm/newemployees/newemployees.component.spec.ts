import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeesComponent } from './newemployees.component';

describe('NewemployeesComponent', () => {
  let component: NewemployeesComponent;
  let fixture: ComponentFixture<NewemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
