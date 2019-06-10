import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {CancionesComponent} from './components/music/canciones/canciones.component';
import {FormComponent} from './components/form/form.component'; 

const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    {path: 'canciones', component: CancionesComponent},
    {path: 'form', component: FormComponent},
    { path: '**', redirectTo: 'inicio' }
];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
