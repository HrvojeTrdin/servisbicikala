import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServisiComponent } from './servisi/servisi.component';
import { KlijentiComponent } from './klijenti/klijenti.component';
import { KlijentComponent } from './klijent/klijent.component';
import { ServisUpdateComponent } from './servis-update/servis-update.component';
import { ServisCreateComponent } from './servis-create/servis-create.component';
import { KlijentCreateComponent } from './klijent-create/klijent-create.component';

const routes: Routes = [
  {path: '', component: KlijentiComponent},
  {path: 'klijenti', component: KlijentiComponent},
  {path: 'klijent/:id', component: KlijentComponent},
  {path: 'klijent-create', component: KlijentCreateComponent},
  {path: 'servisi', component: ServisiComponent},
  {path: 'servis-update/:id', component: ServisUpdateComponent},
  {path: 'servis-create', component: ServisCreateComponent},
  {path: '**', component: KlijentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
