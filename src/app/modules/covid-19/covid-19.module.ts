import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { Covid19RoutingModule } from './covid-19-routing.module';
import { ChartCardComponent } from 'src/app/components/chart-card/chart-card.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent,
    ChartCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    Covid19RoutingModule
  ]
})
export class Covid19Module { }