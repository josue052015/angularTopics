import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonSlayersListComponent } from './demon-slayers-list.component';

describe('DemonSlayersListComponent', () => {
  let component: DemonSlayersListComponent;
  let fixture: ComponentFixture<DemonSlayersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonSlayersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonSlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
