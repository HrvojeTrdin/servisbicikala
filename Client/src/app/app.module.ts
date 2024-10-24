import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { KlijentComponent } from './klijent/klijent.component';
import { KlijentiComponent } from './klijenti/klijenti.component';
import { ServisiComponent } from './servisi/servisi.component';
import { NavComponent } from './nav/nav.component';
import { ServisUpdateComponent } from './servis-update/servis-update.component';
import { FormsModule } from '@angular/forms';
import { ServisCreateComponent } from './servis-create/servis-create.component';
import { KlijentCreateComponent } from './klijent-create/klijent-create.component';

@NgModule({
  declarations: [
    AppComponent,
    KlijentComponent,
    KlijentiComponent,
    ServisiComponent,
    ServisUpdateComponent,
    ServisCreateComponent,
    NavComponent,
    KlijentCreateComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
