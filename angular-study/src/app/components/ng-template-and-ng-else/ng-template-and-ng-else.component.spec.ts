import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateAndNgElseComponent } from './ng-template-and-ng-else.component';

describe('NgTemplateAndNgElseComponent', () => {
  let component: NgTemplateAndNgElseComponent;
  let fixture: ComponentFixture<NgTemplateAndNgElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateAndNgElseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateAndNgElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
