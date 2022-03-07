import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { RatingComponent } from './rating/rating.component';
import {JoinModule} from "../../shared/join/join.module";


@NgModule({
  declarations: [
    MovieComponent,
    RatingComponent
  ],
    imports: [
        CommonModule,
        MovieRoutingModule,
        JoinModule
    ]
})
export class MovieModule { }
