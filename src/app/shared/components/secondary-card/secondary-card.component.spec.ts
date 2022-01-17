import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryCardComponent } from './secondary-card.component';

describe('SecondaryCardComponent', () => {
  let component: SecondaryCardComponent;
  let fixture: ComponentFixture<SecondaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
