export class Movie {
    title: string;
    overview: string;
    releaseDate: string;
    posterPath: string;
    constructor(title: string,
                overview: string,
                releaseDate: string,
                posterPath: string) {
      this.title = title;
      this.overview = overview;
      this.releaseDate = releaseDate;
      this.posterPath = posterPath;
    }

  }
