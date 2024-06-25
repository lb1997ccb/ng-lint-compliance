import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LintCompliantComponent } from './lint-compliant.component';

describe('LintCompliantComponent', () => {
  let component: LintCompliantComponent;
  let fixture: ComponentFixture<LintCompliantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LintCompliantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LintCompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
