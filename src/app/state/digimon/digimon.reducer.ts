import { createReducer, on } from '@ngrx/store';

import { DigimonListItem, Page } from '../../shared';
import { digimonActions } from './digimon.actions';

const initialState: Page<DigimonListItem> = {
    content: [],
    pageable: {
        currentPage: 0,
        elementsOnPage: 0,
        nextPage: '',
        previousPage: '',
        totalElements: 0,
        totalPages: 0
    }
};

export const digimonPageReducer = createReducer(
    initialState,
    on(digimonActions.receivedDigimonPage, (state, { digimonPage }) => {
        return digimonPage;
    })
);