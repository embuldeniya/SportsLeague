import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreQueryComponent } from './firestore-query.component';

describe('FirestoreQueryComponent', () => {
  let component: FirestoreQueryComponent;
  let fixture: ComponentFixture<FirestoreQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestoreQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
