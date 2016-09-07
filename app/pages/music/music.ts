

import { Component } from '@angular/core';
import { NavController, NavParams, Loading} from 'ionic-angular';
import {MusicService} from '../../providers/music-service/music-service';
import {MusicDetailsPage} from '../music-details/music-details';
import {Song} from '../../models/song';
import {TabsPage} from '../tabs/tabs';


@Component({
  templateUrl: 'build/pages/music/music.html',
})
export class MusicPage {
  music: Array<Song> = new Array<Song>();

    constructor(private nav: NavController, private musicService: MusicService) {

    }
    ionViewWillLeave(){

    }
  ionViewLoaded() {
      this.musicService.getMusic().subscribe(res => {
      this.music.unshift(res);
      });


  }

  openDetailPage(song) {
    this.nav.push(MusicDetailsPage, {
      song: song
    });

  }


}
