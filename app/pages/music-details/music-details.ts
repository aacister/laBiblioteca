import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/music-details/music-details.html',
})
export class MusicDetailsPage {

  song: any;

  constructor(private nav: NavController, private navParams: NavParams) {
      this.song = this.navParams.get('song');
  }

}
