import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LintFailureComponent } from './lint-failure.component';

describe('LintFailureComponent', () => {
  let component: LintFailureComponent;
  let fixture: ComponentFixture<LintFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LintFailureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LintFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
