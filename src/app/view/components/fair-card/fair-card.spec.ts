import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairCard } from './fair-card';

describe('FairCard', () => {
  let component: FairCard;
  let fixture: ComponentFixture<FairCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FairCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
