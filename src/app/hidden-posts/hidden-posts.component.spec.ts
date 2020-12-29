import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenPostsComponent } from './hidden-posts.component';

describe('HiddenPostsComponent', () => {
  let component: HiddenPostsComponent;
  let fixture: ComponentFixture<HiddenPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
