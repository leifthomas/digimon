import { Routes } from '@angular/router';
import { DigimonListPageComponent } from './features/digimon/components/digimon-list-page/digimon-list-page.component';
import { DigimonDetailPageComponent } from './features/digimon/components/digimon-detail-page/digimon-detail-page.component';

export const routes: Routes = [
    {
        component: DigimonDetailPageComponent,
        path: 'digimon/:digimonId',
    },
    {
        component: DigimonListPageComponent,
        path: 'digimon',
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'digimon'
    }
];
