import { Component } from '@angular/core';

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
  onSubmit() {
    fetch('http://localhost:3000/pianos', {
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
    // Do login here
  }
}
