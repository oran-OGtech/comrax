import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../movies/types/movie";
import {MOVIE$, MOVIE_PROVIDER} from "./movie.providers";

@Component({
  selector: 'woo-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MOVIE_PROVIDER]
})
export class MovieComponent {
  constructor(@Inject(MOVIE$) readonly movie$: Observable<Movie>) {
  }

}
