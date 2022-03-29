import { Routes } from '@angular/router';
import { GradDetaljiComponent } from './app/grad-detalji/grad-detalji.component';
import { GradComponent } from './app/grad/grad.component';
import { ZanrDetaljiComponent } from './app/zanr-detalji/zanr-detalji.component';
import { ZanrComponent } from './app/zanr/zanr.component';

export const appRoutes: Routes = [
    { path: 'grad', component: GradComponent },
    { path: 'grad/:id', component: GradDetaljiComponent },
    { path: 'zanr', component: ZanrComponent },
    { path: 'zanr/:id', component: ZanrDetaljiComponent },
    { path: '', redirectTo: '/grad', pathMatch: 'full' }
]