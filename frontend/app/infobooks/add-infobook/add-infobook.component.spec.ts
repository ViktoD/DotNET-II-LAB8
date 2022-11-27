import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfobookComponent } from './add-infobook.component';

describe('AddInfobookComponent', () => {
  let component: AddInfobookComponent;
  let fixture: ComponentFixture<AddInfobookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInfobookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
