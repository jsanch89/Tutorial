import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SingletonService } from '../../services/singleton/singleton';

/**
 * Generated class for the CrearObstaculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-obstaculo',
  templateUrl: 'crear-obstaculo.html',
})
export class CrearObstaculoPage {
 ancho:number;
 largo:number;
 sala:any[][];

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton: SingletonService) {
    this.sala = singleton.getMapaL();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearObstaculoPage');
  }

  crear(){
    this.singleton.setSala(this.sala);
    this.navCtrl.pop();
    this.navCtrl.pop();
  }
  
}
