import React from 'react'
import { Link } from 'react-router-dom'
import movieDbUrls from '../../constants/urls'
import { ItemListDetailProps } from '../../interfaces/props'
import './ItemListDetail.css'

export default function ItemListDetail ({ item, showAdditionalInfo = true }: ItemListDetailProps) {
  return (
    <li className="item-container" >
      <Link to={item.type === 'Movie' ? `/movies/${item.id}` : `/shows/${item.id}`} className="detail-link">
        <img src={`${movieDbUrls.images}${item.poster_path}`} alt={item.type === 'Movie' ? item.title : item.name}/>
        <h3>{item.type === 'Movie' ? item.title : item.name}</h3>
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
