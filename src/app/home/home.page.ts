// Home.page.ts
// Home page component declaration
// ----------------------------------------------------------------------------

// importing modules
import { Component } from '@angular/core';

// creating the component
@Component({
  selector: 'app-home',
  templateUrl: 'Home.page.html',
  styleUrls: ['Home.page.scss']
})
export class HomePage {
  scales = [
    {
      id: 'abc',
      name: 'First Scale'
    },
    {
      id: 'def',
      name: 'Second Scale'
    },
    {
      id: 'ghi',
      name: 'Third Scale'
    }
  ];
}
