import React from 'react'
import { Link } from 'react-router-dom'
import movieDbUrls from '../../constants/urls'
import './ItemListDetail.css'

export default function ItemListDetail ({ item, showAdditionalInfo = true }: any) {
  return (
    <li className="item-container" >
      <Link to={item.title ? `/movies/${item.id}` : `/shows/${item.id}`} className="detail-link">
        <img src={`${movieDbUrls.images}${item.poster_path}`} alt={item.title || item.name}/>
        <h3>{item.title || item.name}</h3>
      </Link>
      {showAdditionalInfo &&
      <>
        <span>Vote average: {item.vote_average}</span>
        <span className="small-text">(from {item.vote_count} votes)</span>
      </>
      }
    </li>
  )
}
