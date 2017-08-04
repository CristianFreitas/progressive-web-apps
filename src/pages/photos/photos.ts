import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-photos', // <page-login> Conteudo </page-login>
  templateUrl: 'photos.html' 
})


export class PhotosPage {

  constructor(public navCtrl: ModalController) {

  }
}
