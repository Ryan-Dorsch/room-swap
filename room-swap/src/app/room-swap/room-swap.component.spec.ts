import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSwapComponent } from './room-swap.component';

describe('RoomSwapComponent', () => {
  let component: RoomSwapComponent;
  let fixture: ComponentFixture<RoomSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
