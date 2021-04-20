import React from 'react'
import { Link } from 'react-router-dom'
import movieDbUrls from '../../constants/urls'
import './ItemListDetail.css'

export default function ItemListDetail ({ item }: any) {
  return (
    <li className="item-container" >
      <Link to="" className="detail-link">
        <img src={`${movieDbUrls.images}${item.poster_path}`} alt={item.title || item.name}/>
        <h3>{item.title || item.name}</h3>
      </Link>
      <span>Vote average: {item.vote_average}</span>
      <span className="small-text">(from {item.vote_count} votes)</span>
    </li>
  )
}
