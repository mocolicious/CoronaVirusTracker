import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { NotificationBellComponent } from 'src/app/components/notification-bell/notification-bell.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { SearchResultsComponent } from 'src/app/components/search-results/search-results.component';



@NgModule({
  declarations: [
    ListCardComponent,
    LoadingComponent,
    MapComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListCardComponent,
    LoadingComponent,
    MapComponent,
    SearchBarComponent,
    SearchResultsComponent
  ]
})
export class SharedModule { }
