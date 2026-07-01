import { createSelector } from '@ngrx/store';

import { AppState } from '../index';

const selectDigimonPage = (appState: AppState) => appState.digimonPage;

export const digimonPageContentSelector = createSelector(
    selectDigimonPage,
    (digimonPage) => digimonPage.content
);

// TODO: consider using createFeatureSelector instead
export const digimonPagePageableSelector = createSelector(
    selectDigimonPage,
    (digimonPage) => digimonPage.pageable
);