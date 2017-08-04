import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';
import { SendPhotoPage } from '../send-photo/send-photo';

@Component({
    selector: 'page-take-picture', // <page-login> Conteudo </page-login>
    templateUrl: 'take-picture.html'
})


export class TakePicturePage {

    constructor(
        private viewCtrl: ViewController,
        private modalCtrl: ModalController) {

    }

    takePicture() {
        let modal = this.modalCtrl.create(SendPhotoPage);
        modal.present();
    }


    dismiss() {
        this.viewCtrl.dismiss();
    }


}
