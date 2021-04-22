import { Movie, Show } from './interfaces'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

export interface ItemListDetailProps {
  item: Movie | Show
  showAdditionalInfo?: boolean
}

export interface DetailProps {
  dispatch: ThunkDispatch<any, any, AnyAction>
  movie: Movie
  product: 'movies' | 'shows'
  show: Show
  similarMovies: Movie[]
  similarShows: Show[]
}

export interface PrincipalProps {
  dispatch: ThunkDispatch<any, any, AnyAction>
  movies: Movie[]
  product: 'movies' | 'shows'
  shows: Show[]
}
