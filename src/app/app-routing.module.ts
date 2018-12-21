// app-routing.module.ts
// main app routing declaration
// ----------------------------------------------------------------------------

// importing modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// creating the routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: '@app/Home/Home.module#HomeModule' },
  { path: 'scale-list', loadChildren: '@app/ScaleList/ScaleList.module#ScaleListModule' },
  {
    path: 'scale-detail/:id',
    loadChildren: '@app/ScaleDetail/ScaleDetail.module#ScaleDetailModule'
  }
];

// creating the angular module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
