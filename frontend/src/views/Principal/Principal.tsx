import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPopularMovies, loadPopularShows } from '../../redux/actions/moviesActions'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './principal.css'
import { State } from '../../interfaces/state'
import { Movie, Show } from '../../interfaces/interfaces'

function Principal ({ dispatch, movies, product, shows }: any) {
  if (shows) console.log(shows[0])

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
          <ItemDetail key={movie.id} item={movie}/>
          ))
          : shows.map((show: Show) => (
          <ItemDetail key={show.id} item={show}/>
          ))
      }
      </ul>
    </div>
  )
}

function mapDispatchToProps ({ moviesReducer, showsReducer }: State) {
  return {
    movies: moviesReducer.popularMovies,
    shows: showsReducer.popularShows
  }
}

export default connect(mapDispatchToProps)(Principal)
