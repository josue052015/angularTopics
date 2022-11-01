import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChangesComponent } from './state-changes.component';

describe('StateChangesComponent', () => {
  let component: StateChangesComponent;
  let fixture: ComponentFixture<StateChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
