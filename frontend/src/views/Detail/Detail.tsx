import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import ItemListDetail from '../../components/ItemListDetail/ItemListDetail'
import movieDbUrls from '../../constants/urls'
import { Movie, Show } from '../../interfaces/interfaces'
import { State } from '../../interfaces/state'
import { loadMovieDetail, loadShowDetail, loadSimilarMovies, loadSimilarShows } from '../../redux/actions/actions'
import './detail.css'

function Detail ({ dispatch, movie, product, show, similarMovies, similarShows }: any) {
  const { id }: { id: string} = useParams()
  const [item, setItem] = useState(product === 'movies' ? movie : show)

  useEffect(() => {
    if (product === 'movies' && movie?.id !== +id) {
      dispatch(loadMovieDetail(id))
      dispatch(loadSimilarMovies(id))
    } else if (product === 'shows' && show?.id !== +id) {
      dispatch(loadShowDetail(id))
      dispatch(loadSimilarShows(id))
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
      <section className="similar-products">
        <h3>Similar {product}</h3>
        <ul className="product-list similar-list">
          {product === 'movies'
            ? similarMovies.map((movie: Movie) => (
              <ItemListDetail item={movie} key={movie.id} showAdditionalInfo={false}/>
            ))
            : similarShows.map((show: Show) => (
                <ItemListDetail item={show} key={show.id} showAdditionalInfo={false}/>
            ))
          }
        </ul>
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
    show,
    similarShows
  }
}: State) {
  return {
    movie,
    show,
    similarMovies,
    similarShows
  }
}

export default connect(mapStateToProps)(Detail)
