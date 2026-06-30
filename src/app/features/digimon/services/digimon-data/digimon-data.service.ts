import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

import { Page } from '../../../../shared';
import { DigimonListItem } from '../../models/digimon-list-item';

@Service()
export class DigimonDataService {
    readonly #httpClient = inject(HttpClient);
    readonly #url = 'https://digi-api.com/api/v1/digimon';

    getDigimon() {
        return this.#httpClient.get<Page<DigimonListItem>>(this.#url);
    }
}
