import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerification } from './code-verification';

describe('CodeVerification', () => {
  let component: CodeVerification;
  let fixture: ComponentFixture<CodeVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeVerification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeVerification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
