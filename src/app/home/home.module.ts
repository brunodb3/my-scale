// Home/Home.module.ts
// Home module declaration
// ----------------------------------------------------------------------------

// importing modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ionic modules
import { IonicModule } from '@ionic/angular';

// custom modules
import { HomePage } from '@app/Home/Home.page';

// creating the angular module
@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ]
})
export class HomeModule {}
