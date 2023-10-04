import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpianoComponent } from './detailpiano.component';

describe('DetailpianoComponent', () => {
  let component: DetailpianoComponent;
  let fixture: ComponentFixture<DetailpianoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailpianoComponent]
    });
    fixture = TestBed.createComponent(DetailpianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
