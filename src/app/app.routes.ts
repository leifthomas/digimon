import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';

import { DigimonDetailPageComponent } from './features/digimon/components/digimon-detail-page/digimon-detail-page.component';
import { DigimonListPageComponent } from './features/digimon/components/digimon-list-page/digimon-list-page.component';
import * as digimonEffects from './state/digimon/digimon.effects';

export const routes: Routes = [
    {
        component: DigimonDetailPageComponent,
        path: 'digimon/:digimonId',
    },
    {
        component: DigimonListPageComponent,
        path: 'digimon',
        providers: [provideEffects(digimonEffects)]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'digimon'
    }
];
