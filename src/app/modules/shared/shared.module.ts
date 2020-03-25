import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { SearchResultsComponent } from 'src/app/components/search-results/search-results.component';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    ListCardComponent,
    LoadingComponent,
    MapComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    MatSidenavModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    ListCardComponent,
    LoadingComponent,
    MapComponent,
    SearchBarComponent,
    SearchResultsComponent
  ]
})
export class SharedModule { }
