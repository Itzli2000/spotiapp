import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading = true;

  constructor(
    private sptoify: SpotifyService,
  ) { }

  buscar( searchTerm: string ) {
    const data = this.sptoify.searchArtist(searchTerm);
    data.subscribe( (response: any) => {
      this.artists = response;
      this.loading = false;
    });
  }

}
