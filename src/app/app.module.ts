import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeService } from './home/home.service';
import { HttpModule } from '@angular/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {environment} from '../environments/environment';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    Ng2SearchPipeModule

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
