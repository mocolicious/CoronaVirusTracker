import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/layout/sidebar/sidebar.component';
import { NotificationBellComponent } from 'src/app/components/notification-bell/notification-bell.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from '../../effects/core.effects';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationBellComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    SharedModule,
    MatSidenavModule,
    EffectsModule.forFeature([CoreEffects])
  ],
  exports: [
    RouterModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationBellComponent
  ]
})
export class CoreModule { }
