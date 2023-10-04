import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetailpianoComponent } from './pages/pianos/detailpiano/detailpiano.component';
import { PianoindexComponent } from './pages/pianos/pianoindex.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { EditpianoadminComponent } from './pages/pianos/editpianoadmin/editpianoadmin.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DetailpianoComponent,
    PianoindexComponent,
    NavbarComponent,
    AdminComponent,
    EditpianoadminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CurrencyPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
