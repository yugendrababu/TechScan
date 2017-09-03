import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {AppComponent } from '../app.component';
import {TechnologyComponent }from '../technology/technology.component';
import { RepoComponent} from '../repo/repo.component';
import {RepoDetailsComponent} from '../repo-details/repo-details.component';
import {UserDetailsComponent} from '../user-details/user-details.component';
import {UsersComponent} from '../users/users.component';

const techRoutes: Routes = [
  {
    path:'',
    redirectTo: 'techscan',
    pathMatch: 'full'
   },

  {
    path: 'techscan',
    component:AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'technologies',
        pathMatch: 'full'
      },
      {
        path: 'technologies',
        component: TechnologyComponent
      },
      {
        path: 'repo/:technology',
        component: RepoComponent,
          },
      {
        path: 'users/:username',
        component: UsersComponent,

      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(techRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class techRouterModule { }
