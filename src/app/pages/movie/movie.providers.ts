import {inject, InjectionToken, Provider} from "@angular/core";
import {Movie} from "../movies/types/movie";
import {filter, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

export const MOVIE$ = new InjectionToken<Observable<Movie>>('Movie');
export const MOVIE_PROVIDER: Provider = {
  provide: MOVIE$,
  useFactory: (route: ActivatedRoute) => route.queryParams.pipe(filter(v => Boolean(v['id']))) as Observable<Movie>,
  deps: [ActivatedRoute]
}
