import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MoviesService} from "./movies.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'woo-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class MoviesComponent {

  constructor(readonly movies: MoviesService, route: ActivatedRoute) {
    this.movies.fetch().pipe(untilDestroyed(this)).subscribe();
    route.queryParams.pipe(untilDestroyed(this)).subscribe(({q}) => {
      this.movies.fetch(q).pipe(untilDestroyed(this)).subscribe();
    });
  }
}
