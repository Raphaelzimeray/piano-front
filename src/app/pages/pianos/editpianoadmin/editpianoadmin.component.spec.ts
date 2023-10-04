import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpianoadminComponent } from './editpianoadmin.component';

describe('EditpianoadminComponent', () => {
  let component: EditpianoadminComponent;
  let fixture: ComponentFixture<EditpianoadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditpianoadminComponent]
    });
    fixture = TestBed.createComponent(EditpianoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
