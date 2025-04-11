import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkingCursorComponent } from './blinking-cursor.component';

describe('BlinkingCursorComponent', () => {
  let component: BlinkingCursorComponent;
  let fixture: ComponentFixture<BlinkingCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlinkingCursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlinkingCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
