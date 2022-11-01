import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptTopicsComponent } from './typescript-topics.component';

describe('TypescriptTopicsComponent', () => {
  let component: TypescriptTopicsComponent;
  let fixture: ComponentFixture<TypescriptTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
