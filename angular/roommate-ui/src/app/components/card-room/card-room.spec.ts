import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoom } from './card-room';

describe('CardRoom', () => {
  let component: CardRoom;
  let fixture: ComponentFixture<CardRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRoom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
