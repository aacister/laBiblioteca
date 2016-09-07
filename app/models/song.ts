export class Song {
    name: string;
    album: string;
    artist: string;
    previewUrl: string;
    smallImg: string;
    largeImg: string;
    constructor(name: string,
                album: string,
                artist: string,
                previewUrl: string,
                smallImg: string,
                largeImg: string) {
      this.name = name;
      this.album = album;
      this.artist = artist;
      this.previewUrl = previewUrl;
      this.smallImg = smallImg;
      this.largeImg = largeImg;
    }

  }
