import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfobooksComponent } from './show-infobooks.component';

describe('ShowInfobooksComponent', () => {
  let component: ShowInfobooksComponent;
  let fixture: ComponentFixture<ShowInfobooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInfobooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfobooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
