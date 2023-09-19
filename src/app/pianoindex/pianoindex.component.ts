import { Component } from '@angular/core';

@Component({
  selector: 'app-pianoindex',
  templateUrl: './pianoindex.component.html',
  styleUrls: ['./pianoindex.component.scss']
})
export class PianoindexComponent {
  pianos = null ;
  search = '';
  constructor() {
    console.log('Etat 1', this.pianos);
    fetch('http://localhost:3000/pianos')
      .then((res) => res.json())
      .then((res) => {
        this.pianos = res;
        console.log('Etat 2', this.pianos);
      });
  }

  filterPianos() {
    // @ts-expect-error
    return this.pianos.filter((p) =>
      p.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
    );
  }
}
