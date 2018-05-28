import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCicComponent } from './list-cic.component';

describe('ListCicComponent', () => {
  let component: ListCicComponent;
  let fixture: ComponentFixture<ListCicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
