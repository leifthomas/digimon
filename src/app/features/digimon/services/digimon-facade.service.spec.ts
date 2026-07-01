import { TestBed } from '@angular/core/testing';

import { DigimonFacadeService } from './digimon-facade.service';

describe('DigimonFacadeService', () => {
    let service: DigimonFacadeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DigimonFacadeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
