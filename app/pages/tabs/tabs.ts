import {Component} from '@angular/core';
import {MusicPage} from '../music/music';
import {MoviesPage} from '../movies/movies';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;


  constructor() {

    this.tab1Root  = MusicPage;
    this.tab2Root = MoviesPage;

  }
}
