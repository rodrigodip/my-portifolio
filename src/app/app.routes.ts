import { Routes } from '@angular/router';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

export const routes: Routes = [
    { path: '**', component: ComingSoonComponent },
];
