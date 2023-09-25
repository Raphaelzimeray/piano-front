import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpianoComponent } from './detailpiano/detailpiano.component';
import { PianoindexComponent } from './pianoindex/pianoindex.component';
import { AdminComponent } from './admin/admin.component';
import { EditpianoadminComponent } from './editpianoadmin/editpianoadmin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path:'detail-piano/:id',component:DetailpianoComponent },
  { path: '', component: PianoindexComponent},
  { path: 'edit-admin-piano/:id', component: EditpianoadminComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
