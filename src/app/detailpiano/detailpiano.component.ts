import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailpiano',
  templateUrl: './detailpiano.component.html',
  styleUrls: ['./detailpiano.component.scss']
})
export class DetailpianoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  piano:any ;
  pianoId ;
  constructor(private router: Router) {
    this.pianoId =
    Number(this.route.snapshot.params['id']);
    console.log('Etat 1', this.piano);
    fetch('http://localhost:3000/pianos/'+this.pianoId)
      .then((res) => res.json())
      .then((res) => {
        this.piano = res;
        console.log('Etat 2', this.piano);
      });
  }

  async deletepiano() {
    console.log('bouton de la suppression fonctionne! pour le piano numero',this.pianoId)
    let result = confirm("Etes vous sur de vouloir supprimer le piano ?")
    await fetch('http://localhost:3000/pianos/'+this.pianoId,{
      method: 'DELETE'
    })

    this.goToIndexPiano();
  }

  goToIndexPiano(): void
  {
    this.router.navigate([''])
  }
}
