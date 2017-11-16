import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrearObstaculoPage } from '../crear-obstaculo/crear-obstaculo';
import { SingletonService } from '../../services/singleton/singleton';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  ancho:number;
  largo:number;
  nose:any;
  obsta:CrearObstaculoPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton: SingletonService) {
  }

  agregarObstaculos(){
    this.singleton.setAncho( this.ancho );
    this.singleton.setLargo( this.largo );
    this.singleton.crearMapaL();
    this.navCtrl.push( CrearObstaculoPage );    
  }

}
