import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompArgsComponent } from './comp-args.component';

describe('CompArgsComponent', () => {
  let component: CompArgsComponent;
  let fixture: ComponentFixture<CompArgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompArgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompArgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
