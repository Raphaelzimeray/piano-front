import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpianoComponent } from './detailpiano/detailpiano.component';
import { PianoindexComponent } from './pianoindex/pianoindex.component';

const routes: Routes = [
  { path: 'detail-piano/:id', component: DetailpianoComponent},
  { path: '', component: PianoindexComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
