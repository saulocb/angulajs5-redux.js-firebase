import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowRuleComponent } from './dropdow-rule.component';

describe('DropdowRuleComponent', () => {
  let component: DropdowRuleComponent;
  let fixture: ComponentFixture<DropdowRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
