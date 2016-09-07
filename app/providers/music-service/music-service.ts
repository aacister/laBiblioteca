import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {WebSocketMusicService} from '../websocket-music-service/websocket-music-service';
import * as io from 'socket.io-client';
import {Song} from '../../models/song';
import {LaBibliotecaConfig} from '../../config/config';


@Injectable()
export class MusicService {

  public music: Subject<Song>;

  constructor(private wsMusicService: WebSocketMusicService) {

    }

    getMusic() {

    this.music = <Subject<Song>>this.wsMusicService
            .connect(LaBibliotecaConfig.MUSIC_SOCKET)
            .map((response: MessageEvent): Song => {
                let data = JSON.parse(response.data);
                console.log('MusicService songs: ' + JSON.stringify(data));
                return new Song(data.name,
                         data.album.name,
                         data.artists[0].name,
                         data.preview_url,
                         data.album.images[0].url,
                         data.album.images[1].url);
            });
            return this.music;

    }



}
