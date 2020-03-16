import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        loadChildren: '../covid-19/covid-19.module.ts#Covid19Module'
    },
    {
        path: '**',
        redirectTo: 'Home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }