import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DigimonDataService } from '../../services/digimon-data/digimon-data.service';
import { DigimonTableComponent } from '../digimon-table/digimon-table.component';

@Component({
    selector: 'app-digimon-list-page',
    imports: [DigimonTableComponent, MatCardModule],
    templateUrl: './digimon-list-page.component.html',
    styleUrl: './digimon-list-page.component.css',
})
export class DigimonListPageComponent {
    readonly #digimonDataService = inject(DigimonDataService);

    readonly digimonPage = this.#digimonDataService.getDigimon();
}
