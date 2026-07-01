import { inject, Service } from '@angular/core';
import { Store } from '@ngrx/store';

import { digimonActions, digimonPageContentSelector } from '../../../state';

@Service()
export class DigimonFacadeService {
    readonly #store = inject(Store);

    getDigimonPage() {
        this.#store.dispatch(digimonActions.requestedDigimonPage());

        return this.#store.select(digimonPageContentSelector);
    }
}
