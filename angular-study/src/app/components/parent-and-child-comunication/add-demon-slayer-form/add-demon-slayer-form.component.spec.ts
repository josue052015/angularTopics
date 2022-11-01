import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemonSlayerFormComponent } from './add-demon-slayer-form.component';

describe('AddDemonSlayerFormComponent', () => {
  let component: AddDemonSlayerFormComponent;
  let fixture: ComponentFixture<AddDemonSlayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemonSlayerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDemonSlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
