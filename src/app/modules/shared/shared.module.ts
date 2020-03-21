import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { NotificationBellComponent } from 'src/app/components/notification-bell/notification-bell.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { SearchResultsComponent } from 'src/app/components/search-results/search-results.component';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



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
  ],
  exports: [
    MatSidenavModule,
    MatDividerModule,
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
