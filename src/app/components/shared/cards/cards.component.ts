import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(
    private router: Router
  ) { }

  seeArtist(item: any) {
    let newID: any;
    if (item.type === 'artist') {
      newID = item.id;
    } else {
      newID = item.artists[0].id;
    }
    this.router.navigate(['/artist', newID]);
  }

}
