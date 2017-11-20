import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AggUbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agg-ubicacion',
  templateUrl: 'agg-ubicacion.html',
})
export class AggUbicacionPage {
  posicion:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AggUbicacionPage');
  }

  close(){
    this.viewCtrl.dismiss(this.posicion);
  }

}
