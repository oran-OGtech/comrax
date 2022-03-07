import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MoviesComponent} from './movies.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MoviesService} from "./movies.service";
import {map, Observable, of, tap} from "rxjs";
import {Genre} from "./types/genre";
import {Injectable} from "@angular/core";

const movie = (id: string) => ({
    id,
    overview: 'Its overview',
    cast: ['Its cast'],
    length: '1.2',
    imdb_rating: 9,
    poster: 'https://via.placeholder.com/350x150',
    title: 'Its title',
    genres: ['Genre1', 'Genre2'],
    backdrop: 'https://via.placeholder.com/350x150',
    classification: 'Its classification', director: 'Arthur Disaber', released_on: 'France', slug: '/v'
  }
);

@Injectable()
class MoviesServiceMock extends MoviesService {
  override fetch(q?: string): Observable<Genre[]> {
    return of([movie('1'), movie('2')]).pipe(map(movies => this.groupMovies(movies)),
      tap(genres => this.genres$.next(genres)));
  }
}

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [{provide: MoviesService, useClass: MoviesServiceMock}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have genres', () => {
    expect(compiled.querySelectorAll('.genre')[0].innerHTML).toEqual('Genre1')
  })
});
