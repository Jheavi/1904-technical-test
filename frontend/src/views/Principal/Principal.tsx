import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPopularMovies } from '../../redux/actions/moviesActions'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './principal.css'

function Principal ({ dispatch, movies }: any) {
  if (movies) console.log(movies[0])

  useEffect(() => {
    if (!movies || !movies.length) {
      dispatch(loadPopularMovies())
    }
  }, [])

  return (
    <div className="principal-container">
      <ul className="movies-list">
        {movies && movies.map((movie: any) => (
          <ItemDetail key={movie.id} item={movie}/>
        ))}
      </ul>
    </div>
  )
}

function mapDispatchToProps ({ moviesReducer }: any) {
  return {
    movies: moviesReducer.popularMovies
  }
}

export default connect(mapDispatchToProps)(Principal)
