import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieComponent} from './movie.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RatingComponent} from "./rating/rating.component";
import {JoinModule} from "../../shared/join/join.module";
import {MOVIE$} from "./movie.providers";
import {Provider} from "@angular/core";
import {of} from "rxjs";
import {Movie} from "../movies/types/movie";

const MOVIE: Movie = {
  id: '123q',
  overview: 'Its overview',
  cast: ['Its cast'],
  length: '1.2',
  imdb_rating: 9,
  poster: 'https://via.placeholder.com/350x150',
  title: 'Its title',
  genres: ['Genre1', 'Genre2'],
  backdrop: 'https://via.placeholder.com/350x150',
  classification: 'Its classification', director: 'Arthur Disaber', released_on: 'France', slug: '/v'
};

const MOVIE_PROVIDER: Provider = {provide: MOVIE$, useFactory: () => of(MOVIE)}

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    TestBed.overrideProvider(MOVIE$, MOVIE_PROVIDER);
    await TestBed.configureTestingModule({
      declarations: [MovieComponent, RatingComponent],
      imports: [RouterTestingModule, JoinModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render poster', () => {
    expect(compiled.querySelector('#poster')?.getAttribute('src')).toEqual(MOVIE.poster);
  });
  it('should render title', () => {
    expect(compiled.querySelector('#title')?.textContent).toEqual(MOVIE.title);
  });
  it('should render rating', () => {
    expect(compiled.querySelector('#rating')?.textContent).toEqual(`(${MOVIE.imdb_rating})`);
  });
  it('should render length and director', () => {
    expect(compiled.querySelector('#length-and-director')?.textContent).toEqual(`${MOVIE.length} | ${MOVIE.director}`);
  });
  it('should render cast', () => {
    expect(compiled.querySelector('#cast')?.textContent).toEqual(`Cast: ${MOVIE.cast.join(', ')}`);
  });
  it('should render overview', () => {
    expect(compiled.querySelector('#overview')?.innerHTML).toEqual(MOVIE.overview);
  });
});
