import { Component } from '@angular/core';

@Component({
  selector: 'app-pianoindex',
  templateUrl: './pianoindex.component.html',
  styleUrls: ['./pianoindex.component.scss'],
})
export class PianoindexComponent {
  pianos = null;
  selectedvalue = 'default';
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
    return this.pianos
      .filter((p:any) =>
        p.name?.toLocaleLowerCase().includes(this.search?.toLocaleLowerCase())
      )
      .sort( (a: any, b: any) => {
        if(this.selectedvalue === 'mostexpensive'){
          return b.price - a.price;
        }
        else if(this.selectedvalue === 'lessexpensive'){
          return a.price - b.price;
        }
        else if(this.selectedvalue === 'alphabet'){
          return b.name < a.name? 1:-1;
        }
        else if(this.selectedvalue === 'alphabetdesc'){
          return a.name < b.name? 1:-1;
        }
        else{
          return a.id - b.id;
        }
      });
  }
}
