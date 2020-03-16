import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/layout/sidebar/sidebar.component';
import { NotificationBellComponent } from 'src/app/components/notification-bell/notification-bell.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from '../../effects/core.effects';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationBellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
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
