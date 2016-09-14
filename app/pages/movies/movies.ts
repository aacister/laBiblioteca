import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {MovieService} from '../../providers/movie-service/movie-service';
import {MovieDetailsPage} from '../movie-details/movie-details';
import {Movie} from '../../models/movie';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/movies/movies.html',
})
export class MoviesPage {


  movies: Array<Movie> = new Array<Movie>();

    constructor(private nav: NavController, private movieService: MovieService) {
    }

  ionViewLoaded(){

      this.movieService.getMovies().subscribe(res => {
      this.movies.unshift(res);
      });

    }

  openDetailPage(movie) {
    this.nav.push(MovieDetailsPage, {
      movie: movie
    });

  }

}
