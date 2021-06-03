import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewReleasesComponent } from './home-new-releases.component';

describe('HomeNewReleasesComponent', () => {
  let component: HomeNewReleasesComponent;
  let fixture: ComponentFixture<HomeNewReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewReleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
