import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  tracks: any[] = [];
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private soptify: SpotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        const artistId = params['id'];
        if (artistId) {
          this.getArtist(artistId);
          this.getTopTracks(artistId);
        }
      }
    );
  }

  getArtist(id: string) {
    this.soptify.getArtist(id).subscribe(
      data =>  {
        this.artist = data;
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this.soptify.getTopTracks(id).subscribe(
      data =>  {
        console.log(data);
        this.tracks = data;
      });
  }

}
