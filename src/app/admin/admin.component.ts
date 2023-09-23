import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  name = '';
  price = '';
  brand = '';
  color = '';
  photos = '';
  description = '';
  constructor(private router: Router){}
  async onSubmit() {
    await fetch('http://localhost:3000/pianos', { // attendre que le fetch soit terminé et ensuite il passe a la ligne en dessous
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.name,
        price: this.price,
        brand: this.brand,
        color: this.color,
        photos: this.photos,
        description: this.description,
      }),
    });
    this.goToIndexPiano();
    // Do login here
  }

  goToIndexPiano(): void
  {
    this.router.navigate([''])
  }


}
