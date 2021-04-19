import { Movie } from './interfaces'

export interface State {
  moviesReducer: {
    popularMovies: Movie[] | []
  }
  showsReducer: {
    popularShows: any
  }
}
