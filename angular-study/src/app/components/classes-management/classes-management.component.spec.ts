import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesManagementComponent } from './classes-management.component';

describe('ClassesManagementComponent', () => {
  let component: ClassesManagementComponent;
  let fixture: ComponentFixture<ClassesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
