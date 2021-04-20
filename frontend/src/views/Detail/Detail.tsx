import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import ItemListDetail from '../../components/ItemListDetail/ItemListDetail'
import movieDbUrls from '../../constants/urls'
import { Movie } from '../../interfaces/interfaces'
import { State } from '../../interfaces/state'
import { loadMovieDetail, loadShowDetail, loadSimilarMovies } from '../../redux/actions/actions'
import './detail.css'

function Detail ({ dispatch, movie, product, show, similarMovies }: any) {
  const { id }: { id: string} = useParams()
  const [item, setItem] = useState(product === 'movies' ? movie : show)

  useEffect(() => {
    if (product === 'movies' && movie?.id !== +id) {
      dispatch(loadMovieDetail(id))
      dispatch(loadSimilarMovies(id))
    } else if (product === 'shows' && show?.id !== +id) {
      dispatch(loadShowDetail(id))
    }
  }, [id])

  useEffect(() => {
    setItem(product === 'movies' ? movie : show)
  }, [product, movie, show])

  return (
    <div className="detail-container">
      <div className="img-container">
        <img src={`${movieDbUrls.bigImages}${item?.backdrop_path}`} alt=""/>
      </div>
      <div className="title-gradient">
        <div className="gradient"></div>
        <h1>{item?.title || item?.name}</h1>
      </div>
      <div className="average-overview">
        <span className="average">Vote average: <span className="average__number">{item?.vote_average}</span></span>
        <span className="overview">{item?.overview}</span>
      </div>
      <section className="similar-movies">
        {similarMovies.map((movie: Movie) => (
          <ItemListDetail item={movie} key={movie.id} showAdditionalInfo={false}/>
        ))}
      </section>
    </div>
  )
}

function mapStateToProps ({
  moviesReducer: {
    movie,
    similarMovies
  },
  showsReducer: {
    show
  }
}: State) {
  return {
    movie,
    show,
    similarMovies
  }
}

export default connect(mapStateToProps)(Detail)
