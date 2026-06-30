import { AfterViewInit, Component, computed, input, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterLink } from '@angular/router';
import { map, Observable, of } from 'rxjs';

import { DigimonListItem, Page } from '../../../../shared';

@Component({
    selector: 'app-digimon-table',
    templateUrl: './digimon-table.component.html',
    styleUrl: './digimon-table.component.css',
    imports: [MatTableModule, MatPaginatorModule, MatSortModule, RouterLink],
})
export class DigimonTableComponent implements AfterViewInit {
    //   @ViewChild(MatPaginator) paginator!: MatPaginator;
    readonly digimonPage = input<Observable<Page<DigimonListItem>>>(of({
        content: [], pageable: {
            currentPage: 0,
            elementsOnPage: 0,
            nextPage: '',
            previousPage: '',
            totalElements: 0,
            totalPages: 0
        }
    }));

    readonly dataSource = computed(() => {
        return this.digimonPage().pipe(map((page) => page.content));
    });

    readonly displayedColumns = ['id', 'name'];

    ngAfterViewInit(): void {
        // this.dataSource.paginator = this.paginator;
    }
}
