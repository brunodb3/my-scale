// app-routing.module.ts
// main app routing declaration
// ----------------------------------------------------------------------------

// importing modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// creating the routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: '@app/home/home.module#HomePageModule' }
];

// creating the angular module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
