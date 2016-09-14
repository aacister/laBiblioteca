import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {MusicPreviewPage} from '../music-preview/music-preview';


@Component({
  templateUrl: 'build/pages/music-details/music-details.html',
})
export class MusicDetailsPage {

  song: any;

  constructor(private nav: NavController, private navParams: NavParams, private modalCtrl: ModalController) {
      this.song = navParams.get('song');

  }

  previewSong(){

        let modal = this.modalCtrl.create(MusicPreviewPage, {song: this.song});


        modal.present();

    }


}
