// ScaleList.page.spec.ts
// ScaleList page test declaration
// ----------------------------------------------------------------------------

// importing modules
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// custom modules
import { ScaleListPage } from '@app/ScaleList/ScaleList.page';

// describing the component tests
describe('ScaleListPage', () => {
  // declaring variables
  let component: ScaleListPage;
  let fixture: ComponentFixture<ScaleListPage>;

  // fires before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScaleListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  // fires before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing if the page was created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
