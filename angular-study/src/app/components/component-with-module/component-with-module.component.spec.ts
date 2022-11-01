import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithModuleComponent } from './component-with-module.component';

describe('ComponentWithModuleComponent', () => {
  let component: ComponentWithModuleComponent;
  let fixture: ComponentFixture<ComponentWithModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWithModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentWithModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
