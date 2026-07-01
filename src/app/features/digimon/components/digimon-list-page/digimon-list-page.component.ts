import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DigimonFacadeService } from '../../services/digimon-facade.service';
import { DigimonTableComponent } from '../digimon-table/digimon-table.component';

@Component({
    selector: 'app-digimon-list-page',
    imports: [DigimonTableComponent, MatCardModule],
    templateUrl: './digimon-list-page.component.html',
    styleUrl: './digimon-list-page.component.css',
})
export class DigimonListPageComponent {
    readonly #digimonFacadeService = inject(DigimonFacadeService);

    readonly digimonPage = this.#digimonFacadeService.getDigimonPage();
}
