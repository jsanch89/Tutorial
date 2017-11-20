import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SingletonService } from '../services/singleton/singleton';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { ViajePage } from '../pages/viaje/viaje';
import { CrearObstaculoPage } from '../pages/crear-obstaculo/crear-obstaculo';
import { AgregarLugarPage } from '../pages/agregar-lugar/agregar-lugar';
import { AggUbicacionPage } from '../pages/agg-ubicacion/agg-ubicacion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    ViajePage,
    CrearObstaculoPage,
    AgregarLugarPage,
    AggUbicacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    ViajePage,
    CrearObstaculoPage,
    AgregarLugarPage,
    AggUbicacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SingletonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
