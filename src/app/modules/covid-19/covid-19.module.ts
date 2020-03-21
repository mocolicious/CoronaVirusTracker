import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { Covid19RoutingModule } from './covid-19-routing.module';
import { ChartCardComponent } from 'src/app/components/chart-card/chart-card.component';
import { CoreModule } from '../core/core.module';
import { D3Service } from 'src/app/services/d3.service';
import { D3_DIRECTIVES } from '../../directives';
import { LinkVisualComponent } from 'src/app/components/visuals/link-visual/link-visual.component';
import { NodeVisualComponent } from 'src/app/components/visuals/node-visual/node-visual.component';
import { GraphComponent } from 'src/app/components/graph/graph.component';




@NgModule({
  declarations: [
    HomeComponent,
    GraphComponent,
    ChartCardComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    ...D3_DIRECTIVES
  ],
  imports: [
    CommonModule,
    SharedModule,
    Covid19RoutingModule
  ],
  providers: [D3Service]
})
export class Covid19Module { }
