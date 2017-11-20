import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { ViajePage } from '../viaje/viaje'
import { AgregarLugarPage } from '../agregar-lugar/agregar-lugar';
import { SingletonService } from '../../services/singleton/singleton';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public singleton:SingletonService) {

  }

  goToCrearMapa(){
    this.navCtrl.push(MapaPage);
  }

  goToViaje(){
    this.navCtrl.push(ViajePage);
    console.log("Cambio de pestaña");
  }

  goToAgregar(){
    this.navCtrl.push( AgregarLugarPage );
  }

}
