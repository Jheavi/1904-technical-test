import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPopularMovies, loadPopularShows } from '../../redux/actions/actions'
import ItemListDetail from '../../components/ItemListDetail/ItemListDetail'
import './principal.css'
import { State } from '../../interfaces/state'
import { Movie, Show } from '../../interfaces/interfaces'
import { PrincipalProps } from '../../interfaces/props'

function Principal ({ dispatch, movies, product, shows }: PrincipalProps) {
  useEffect(() => {
    if (product === 'movies' && (!movies || !movies.length)) {
      dispatch(loadPopularMovies())
    }

    if (product === 'shows' && (!shows || !shows.length)) {
      dispatch(loadPopularShows())
    }
  }, [])

  return (
    <div className="principal-container">
      <ul className="product-list">
        {product === 'movies'
          ? movies.map((movie: Movie) => (
          <ItemListDetail key={movie.id} item={movie}/>
          ))
          : shows.map((show: Show) => (
          <ItemListDetail key={show.id} item={show}/>
          ))
      }
      </ul>
    </div>
  )
}

function mapDispatchToProps ({
  moviesReducer: { popularMovies },
  showsReducer: { popularShows }
}: State) {
  return {
    movies: popularMovies,
    shows: popularShows
  }
}

export default connect(mapDispatchToProps)(Principal)
