import { Component } from '@angular/core';
import {ViewController, NavController, NavParams} from 'ionic-angular';
import {DomSanitizationService } from '@angular/platform-browser';


@Component({
  templateUrl: 'build/pages/music-preview/music-preview.html',
//  template: '<div><object width="400" height="400" [data]="sanitizer.bypassSecurityTrustUrl(previewUrl)"></object></div>'
})
export class MusicPreviewPage {

  song: any;
  previewUrl: any;

  constructor(public view: ViewController, private nav: NavController, private navParams: NavParams, private sanitizer : DomSanitizationService) {
      this.song = navParams.get('song');
      console.log('this.song = ' + JSON.stringify(this.song));

    // this.previewUrl = sanitizer.bypassSecurityTrustUrl(this.song.previewUrl);
    this.previewUrl = this.song.previewUrl;
  }



  close(): void {
      this.view.dismiss();
    }


}
