import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrazeComponent } from './home-praze.component';

describe('HomePrazeComponent', () => {
  let component: HomePrazeComponent;
  let fixture: ComponentFixture<HomePrazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePrazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePrazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
