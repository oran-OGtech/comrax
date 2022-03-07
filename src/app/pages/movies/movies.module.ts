import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule {
}
