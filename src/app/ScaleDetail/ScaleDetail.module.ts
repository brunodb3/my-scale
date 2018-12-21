// ScaleDetail/ScaleDetail.module.ts
// ScaleDetail module declaration
// ----------------------------------------------------------------------------

// importing modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ionic modules
import { IonicModule } from '@ionic/angular';

// custom modules
import { ScaleDetailPage } from '@app/ScaleDetail/ScaleDetail.page';

// creating the angular module
@NgModule({
  declarations: [ScaleDetailPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ScaleDetailPage
      }
    ])
  ]
})
export class ScaleDetailModule {}
