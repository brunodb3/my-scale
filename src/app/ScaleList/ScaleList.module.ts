// ScaleList/ScaleList.module.ts
// ScaleList module declaration
// ----------------------------------------------------------------------------

// importing modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ionic modules
import { IonicModule } from '@ionic/angular';

// custom modules
import { ScaleListPage } from '@app/ScaleList/ScaleList.page';

// creating the angular module
@NgModule({
  declarations: [ScaleListPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ScaleListPage
      }
    ])
  ]
})
export class ScaleListModule {}
