import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { DigimonListItem, Page } from '../../shared';

export const digimonActions = createActionGroup({
    events: {
        'received digimon page': props<{ digimonPage: Page<DigimonListItem> }>(),
        'requested digimon page': emptyProps()
    },
    source: 'Digimon Data Service'
});