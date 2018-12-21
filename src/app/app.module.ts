// app.module.ts
// main app module declaration
// ----------------------------------------------------------------------------

// importing modules
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// ionic modules
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// custom modules
import { environment } from '@env/environment';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

// declaring the angular module
@NgModule({
  entryComponents: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule {}
