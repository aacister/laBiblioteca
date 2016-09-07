import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {MovieService} from './providers/movie-service/movie-service';
import {MusicService} from './providers/music-service/music-service';
import {WebSocketMovieService} from './providers/websocket-movie-service/websocket-movie-service';
import {WebSocketMusicService} from './providers/websocket-music-service/websocket-music-service';



@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [WebSocketMovieService, WebSocketMusicService, MovieService, MusicService]);
