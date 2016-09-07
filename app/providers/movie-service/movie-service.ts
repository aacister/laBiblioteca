import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';
import {WebSocketMovieService} from '../websocket-movie-service/websocket-movie-service';
import * as io from 'socket.io-client';
import {Movie} from '../../models/movie';
import {LaBibliotecaConfig} from '../../config/config';

@Injectable()
export class MovieService {


  public movies: Subject<Movie>;

  constructor(private wsMovieService: WebSocketMovieService) {



    }

    getMovies() {
    this.movies = <Subject<Movie>>this.wsMovieService
            .connect(LaBibliotecaConfig.MOVIE_SOCKET)
            .map((response: MessageEvent): Movie => {
                console.log('Movie Service mapping');
                let data = JSON.parse(response.data);
                console.log('MovieService movies: ' + JSON.stringify(data));
                return new Movie(data.title,
                           data.overview,
                           data.release_date,
                           data.poster_path);
            });
            return this.movies;
    }


}
