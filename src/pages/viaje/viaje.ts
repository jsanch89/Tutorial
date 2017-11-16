import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SingletonService } from '../../services/singleton/singleton';

/**
 * Generated class for the ViajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viaje',
  templateUrl: 'viaje.html',
})
export class ViajePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleto:SingletonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajePage');
  }

}
