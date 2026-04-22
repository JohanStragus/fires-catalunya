import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPanel } from './favorites-panel';

describe('FavoritesPanel', () => {
  let component: FavoritesPanel;
  let fixture: ComponentFixture<FavoritesPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
