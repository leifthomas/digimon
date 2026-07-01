import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap, withLatestFrom } from 'rxjs';

import { DigimonDataService } from '../../shared/services/digimon-data/digimon-data.service';
import { digimonActions } from './digimon.actions';
import { digimonPageContentSelector, digimonPagePageableSelector } from './digmon.selectors';

export const getDigimonPage = createEffect((
    actions$ = inject(Actions),
    digimonDataService = inject(DigimonDataService),
    store = inject(Store)
) => {
    return actions$.pipe(
        ofType(digimonActions.requestedDigimonPage),
        withLatestFrom(store.select(digimonPageContentSelector), store.select(digimonPagePageableSelector)),
        switchMap(([action, content, pageable]) => content.length ? of({ content, pageable }) : digimonDataService.getDigimonPage()),
        map((digimonPage) => digimonActions.receivedDigimonPage({ digimonPage }))
    );
}, { functional: true });