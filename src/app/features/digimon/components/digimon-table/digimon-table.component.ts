import { AfterViewInit, Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { DigimonListItem } from '../../../../shared';

@Component({
    selector: 'app-digimon-table',
    templateUrl: './digimon-table.component.html',
    styleUrl: './digimon-table.component.css',
    imports: [MatTableModule, MatPaginatorModule, MatSortModule, RouterLink],
})
export class DigimonTableComponent implements AfterViewInit {
    //   @ViewChild(MatPaginator) paginator!: MatPaginator;

    readonly dataSource = input.required<Observable<DigimonListItem[]>>();

    readonly displayedColumns = ['id', 'name'];

    ngAfterViewInit(): void {
        // this.dataSource.paginator = this.paginator;
    }
}
