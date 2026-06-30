import { Component } from '@angular/core';
import { DigimonDetailCardComponent } from '../digimon-detail-card/digimon-detail-card.component';

@Component({
    selector: 'app-digimon-detail-page',
    imports: [DigimonDetailCardComponent],
    templateUrl: './digimon-detail-page.component.html',
    styleUrl: './digimon-detail-page.component.css',
})
export class DigimonDetailPageComponent { }
