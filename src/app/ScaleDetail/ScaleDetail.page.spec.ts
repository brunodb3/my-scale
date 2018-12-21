// ScaleDetail.page.spec.ts
// ScaleDetail page test declaration
// ----------------------------------------------------------------------------

// importing modules
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// custom modules
import { ScaleDetailPage } from '@app/ScaleDetail/ScaleDetail.page';

// describing the component tests
describe('ScaleDetailPage', () => {
  // declaring variables
  let component: ScaleDetailPage;
  let fixture: ComponentFixture<ScaleDetailPage>;

  // fires before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScaleDetailPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  // fires before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing if the page was created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
