import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {Movie} from "./types/movie";
import {Genre} from "./types/genre";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly genres$ = new BehaviorSubject<Genre[]>([]);
  readonly notFound$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
  }

  fetch(q?: string): Observable<Genre[]> {
    return this.httpClient.get<{ movies: Movie[] }>(
      `https://wookie.codesubmit.io/movies?q=${q || ''}`,
      {headers: {Authorization: 'Bearer Wookie2021'}}
    ).pipe(map(({movies}) => this.groupMovies(movies)), tap(genres => {
      this.genres$.next(genres);
      this.notFound$.next(!genres.length);
    }));
  }

  groupMovies(movies: Movie[]): Genre[] {
    return movies.reduce<Genre[]>((genres, current) => {
      current.genres.forEach(genreName => {
        const i = genres.findIndex(genre => genre.name === genreName);
        if (i < 0) {
          genres.push({name: genreName, movies: [current]});
        } else {
          genres[i].movies.push(current);
        }
      })
      return genres;
    }, []);
  }
}
