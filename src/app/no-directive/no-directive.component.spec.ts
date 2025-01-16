import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDirectiveComponent } from './no-directive.component';

describe('NoDirectiveComponent', () => {
  let component: NoDirectiveComponent;
  let fixture: ComponentFixture<NoDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoDirectiveComponent]
    });
    fixture = TestBed.createComponent(NoDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
