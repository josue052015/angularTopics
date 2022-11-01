import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemonSlayerWithOutputComponent } from './add-demon-slayer-with-output.component';

describe('AddDemonSlayerWithOutputComponent', () => {
  let component: AddDemonSlayerWithOutputComponent;
  let fixture: ComponentFixture<AddDemonSlayerWithOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemonSlayerWithOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDemonSlayerWithOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
