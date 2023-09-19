import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoindexComponent } from './pianoindex.component';

describe('PianoindexComponent', () => {
  let component: PianoindexComponent;
  let fixture: ComponentFixture<PianoindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PianoindexComponent]
    });
    fixture = TestBed.createComponent(PianoindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
