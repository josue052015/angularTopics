import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesImplementationComponent } from './custom-directives-implementation.component';

describe('CustomDirectivesImplementationComponent', () => {
  let component: CustomDirectivesImplementationComponent;
  let fixture: ComponentFixture<CustomDirectivesImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectivesImplementationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectivesImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
