import {TestBed} from '@angular/core/testing';

import {MoviesService} from './movies.service';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MoviesRoutingModule} from "./movies-routing.module";
import {Movie} from "./types/movie";

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

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule],
      imports: [
        CommonModule,
        HttpClientModule,
        MoviesRoutingModule
      ]
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should group movies', () => {
    const movie1 = movie('1');
    const movie2 = movie('2');
    expect(service.groupMovies([movie1, movie2])).toEqual(
      [
        {
          name: 'Genre1',
          movies: [movie1, movie2]
        },
        {
          name: 'Genre2',
          movies: [movie1, movie2]
        }
      ]
    )
  })
});
