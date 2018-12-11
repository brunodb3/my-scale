// app.module.ts
// main app module declaration
// ----------------------------------------------------------------------------

// importing modules
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// ionic modules
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// custom modules
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

// declaring the angular module
@NgModule({
  entryComponents: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule {}
