import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApp } from './user-app';

describe('UserApp', () => {
  let component: UserApp;
  let fixture: ComponentFixture<UserApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserApp],
    }).compileComponents();

    fixture = TestBed.createComponent(UserApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
