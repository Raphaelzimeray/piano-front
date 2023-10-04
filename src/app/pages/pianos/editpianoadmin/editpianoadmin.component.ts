import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpianoadmin',
  templateUrl: './editpianoadmin.component.html',
  styleUrls: ['./editpianoadmin.component.scss'],
})
export class EditpianoadminComponent {
  piano = {
    id: null,
    name: '',
    price: '',
    brand: '',
    color: '',
    photos: '',
    description: '',
  };
  pianoId: any;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {
    this.pianoId = Number(this.route.snapshot.params['id']);
    console.log('Etat 1', this.piano);
    fetch('http://localhost:3000/pianos/' + this.pianoId)
      .then((res) => res.json())
      .then((res) => {
        this.piano = res;
        console.log('Etat 2', this.piano);
      });
  }

  async onSubmit() {
    //console.log(e);
    //e.preventDefault();
    await fetch('http://localhost:3000/pianos/' + this.piano.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.piano.name,
        price: this.piano.price,
        brand: this.piano.brand,
        color: this.piano.color,
        photos: this.piano.photos,
        description: this.piano.description,
      }),
    });

    this.goToDetailsPiano();
  }

  goToDetailsPiano(): void {
    this.router.navigate(['detail-piano', this.pianoId]);
  }
}
