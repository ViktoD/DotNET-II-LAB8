import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobooksComponent } from './infobooks.component';

describe('InfobooksComponent', () => {
  let component: InfobooksComponent;
  let fixture: ComponentFixture<InfobooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
