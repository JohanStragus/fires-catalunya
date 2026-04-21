import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fairs } from './fairs';

describe('Fairs', () => {
  let component: Fairs;
  let fixture: ComponentFixture<Fairs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fairs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fairs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
