// home.page.spec.ts
// home page test declaration
// ----------------------------------------------------------------------------

// importing modules
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// custom modules
import { HomePage } from '@app/home/home.page';

// describing the component tests
describe('HomePage', () => {
  // declaring variables
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // fires before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  // fires before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing if the page was created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
