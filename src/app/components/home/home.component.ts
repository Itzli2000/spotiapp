import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  releases: any[] = [];
  loading = true;

  constructor(
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    const data = this.spotify.getNewReleases();
    data.subscribe((response: any) => {
      this.releases = response;
      this.loading = false;
    });
  }

}
