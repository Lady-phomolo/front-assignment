import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicFormComponent } from './cic-form.component';

describe('CicFormComponent', () => {
  let component: CicFormComponent;
  let fixture: ComponentFixture<CicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
