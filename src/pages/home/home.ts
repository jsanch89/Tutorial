import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { ViajePage } from '../viaje/viaje';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToMapaPage(){
    this.navCtrl.push( MapaPage );
  }

  goToViajePage(){
    this.navCtrl.push( ViajePage );
  }
}
