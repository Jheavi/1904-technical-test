import React from 'react'
import movieDbUrls from '../../constants/urls'
import './itemDetail.css'

export default function ItemDetail ({ item }: any) {
  return (
    <li className="item-container" >
      <img src={`${movieDbUrls.images}${item.poster_path}`} alt={item.title}/>
      <h3>{item.title}</h3>
      <span>Vote average: {item.vote_average}</span>
      <span className="small-text">(from {item.vote_count} votes)</span>
    </li>
  )
}
