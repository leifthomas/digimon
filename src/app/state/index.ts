import { isDevMode } from '@angular/core';
import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
} from '@ngrx/store';

import { DigimonListItem, Page } from '../shared';
import { digimonPageReducer } from './digimon/digimon.reducer';

export * from './digimon/digimon.actions';
export * from './digimon/digmon.selectors';

export interface AppState {
    digimonPage: Page<DigimonListItem>
};

export const reducers: ActionReducerMap<AppState> = {
    digimonPage: digimonPageReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
