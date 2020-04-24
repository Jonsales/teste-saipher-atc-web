import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children:[
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(f => f.HomeModule)
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
