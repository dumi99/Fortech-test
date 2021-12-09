import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountriesComponent } from './filter-countries.component';

describe('FilterCountriesComponent', () => {
  let component: FilterCountriesComponent;
  let fixture: ComponentFixture<FilterCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
