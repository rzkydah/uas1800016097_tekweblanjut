import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahBukuComponent } from './tambah-buku.component';

describe('TambahBukuComponent', () => {
  let component: TambahBukuComponent;
  let fixture: ComponentFixture<TambahBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
