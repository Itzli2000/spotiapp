import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  getQuery(query: string) {
    const token = 'BQDVaSoKWXTbWcwxP1EI0xnBn9oAmj2NgmUgd3ZJrr8XUqvgPtOW0EAZqkJCIpz_OxFuG49kAGY5TftFC1c';
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data.albums.items)
    );
  }

  searchArtist(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`).pipe(
      map((data: any) => data.tracks)
    );
  }

}
