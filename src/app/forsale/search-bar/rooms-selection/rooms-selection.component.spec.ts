import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsSelectionComponent } from './rooms-selection.component';

describe('RoomsSelectionComponent', () => {
  let component: RoomsSelectionComponent;
  let fixture: ComponentFixture<RoomsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
