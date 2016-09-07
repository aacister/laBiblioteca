import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/movie-details/movie-details.html',
})
export class MovieDetailsPage {

movie: any;

constructor(private nav: NavController, private navParams: NavParams) {
    this.movie = this.navParams.get('movie');
}

}
