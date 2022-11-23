import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReadersComponent } from './show-readers.component';

describe('ShowReadersComponent', () => {
  let component: ShowReadersComponent;
  let fixture: ComponentFixture<ShowReadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
