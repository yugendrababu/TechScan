import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { RepoComponent } from './repo/repo.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import {techRouterModule} from './router/router.module';
import { HeaderComponent } from './header/header.component';
import { DataService} from './data-service.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    RepoComponent,
    UsersComponent,
    UserDetailsComponent,
    RepoDetailsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    techRouterModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
