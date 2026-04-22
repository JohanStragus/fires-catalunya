import { Routes } from '@angular/router';
import { Home } from './view/pages/home/home';
import { Fairs } from './view/pages/fairs/fairs';
import { Favorites } from './view/pages/favorites/favorites';
import { FairDetail } from './view/pages/fair-detail/fair-detail';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'fairs', component: Fairs },
    { path: 'favorites', component: Favorites },
    { path: 'fair/:id', component: FairDetail }
];